import { sinkDone } from "./interfaces.js";
export class AbstractSink {
    constructor() { }
    done() {
        throw sinkDone;
    }
}
export class AbstractDelegatingSink {
    constructor(delegate) {
        this.delegate = delegate;
    }
    done() {
        this.delegate.done();
    }
}
