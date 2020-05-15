import { assertSinkState } from "./sink.js";
class ReducerSink {
    constructor(acc, reducer) {
        this.acc = acc;
        this.reducer = reducer;
        this.isDone = false;
    }
    notify(next) {
        assertSinkState(this);
        this.acc = this.reducer(this.acc, next);
    }
    done() {
        this.isDone = true;
    }
}
export const reduce = (reducer, initialValue) => runnable => {
    const sink = new ReducerSink(initialValue(), reducer);
    runnable.run(sink);
    return sink.acc;
};
