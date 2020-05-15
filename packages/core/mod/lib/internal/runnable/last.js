import { none } from "../../option.js";
import { AbstractSink } from "./sink.js";
class LastSink extends AbstractSink {
    constructor() {
        super();
        this.result = none;
    }
    notify(next) {
        this.result = next;
    }
}
export const last = (runnable) => {
    const sink = new LastSink();
    runnable.run(sink);
    return sink.result;
};
