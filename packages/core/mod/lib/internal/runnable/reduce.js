class ReducerSink {
    constructor(acc, reducer) {
        this.acc = acc;
        this.reducer = reducer;
        this.isDone = false;
    }
    push(next) {
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
