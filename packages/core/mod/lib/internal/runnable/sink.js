import { sinkDone } from "./interfaces.js";
export class AbstractSink {
    constructor() {
        this.isDone = false;
    }
    done() {
        this.isDone = true;
        throw sinkDone;
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
