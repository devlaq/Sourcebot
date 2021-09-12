abstract class Test {
    abstract name: string;
    abstract description = 'No description provided';

    abstract test(args: object[]): string;
}

class TestManager {
    public tests: Test[];
    public loader: TestLoader;

    public constructor() {

    }
}

class ExampleTest extends Test {
    public name = 'exampletest';
    public description = 'Just example test';

    public test(args: object[]) {
        return `Example test (args[0]: ${args[0]})`;
    }
}