export class AbstractSink {
    constructor() {
        this.isDone = false;
    }
    done() {
        this.isDone = true;
    }
}
export class AbstractDelegatingSink {
    constructor(delegate) {
        this.delegate = delegate;
    }
    get isDone() {
        return this.delegate.isDone;
    }
    done() {
        this.delegate.done();
    }
}
