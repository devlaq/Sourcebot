import { Discord } from "./deps.ts";

class Listener {

	eventName: keyof Discord.ClientEvents = 'ready';
	once?: boolean;
	
	/** Method called when the listener errors */
	public onError(error: Error): void {
	}

	/** Actual listener code, which is listened when all checks have passed. */
	public call(args: object[]): any {}

}

class EventManager {

	public events: Map<string, Listener>;

	public constructor() {
		this.events = new Map<string, Listener>();
	}

	/**
	 * load and register events
	 * @param path path to load events
	 */
	public loadEvents(client: Discord.Client, path: string): number {
		let cnt = 0;
		for(const file in Deno.readDirSync(path)) {
			if(file.endsWith('.ts')) {
				import(file).then((module: Listener | typeof Listener) => {
					let listener: Listener;
					if(module instanceof Listener) listener = module;
					else listener = new module();
					
					client.on(listener.eventName, (...args) => this.callEvent(listener, listener.onError, args));

					cnt++;
				});
			}
		}
		return cnt;
	}

	public callEvent(listener: Listener, onError: (error: Error) => void, ...args: object[]) {
		try {
			listener.call(args);
		} catch(e) {
			onError(e);
		}
	}

}

export { Listener, EventManager };