export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}) {
        this.state = initialState;
    }

    get value() {
        return this.state;
    }

    dispatch(action) {
        console.log(this.state);

        this.state = {
            ...this.state,
            todos: [...this.state.todos, action]
        }

        console.log(this.state);
    }
}
