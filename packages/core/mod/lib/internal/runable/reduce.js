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
export const reduce = (reducer, initialValue) => runable => {
    const sink = new ReducerSink(initialValue(), reducer);
    runable.run(sink);
    return sink.acc;
};
