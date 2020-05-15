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
        this.isDone = false;
    }
    done() {
        this.isDone = true;
        this.delegate.done();
    }
}
