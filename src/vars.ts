class Vars {

    public static defaultConfig: Record<string, unknown> = {
        token: 'Put your token here',
        prefix: 'examplePrefix',
        owners: ['your id here'],
        commandDirectory: 'command directory here',
        eventDirectory: 'event directory here',
        categories: [
            {
                name: 'example',
                ownersOnly: false
            }
        ]
    }

}

export { Vars };