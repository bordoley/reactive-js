import { ignore } from "../../functions.js";
import { __DEV__ } from "../env.js";
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
const assertSinkStateProduction = ignore;
const assertSinkStateDev = (sink) => {
    if (sink.isDone) {
        throw new Error("Sink is done");
    }
};
const _asserSinkState = __DEV__
    ? assertSinkStateDev
    : assertSinkStateProduction;
export const assertSinkState = _asserSinkState;
