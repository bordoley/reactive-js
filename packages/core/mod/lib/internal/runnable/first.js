import { none } from "../../option.js";
import { AbstractSink } from "./sink.js";
class FirstSink extends AbstractSink {
    constructor() {
        super(...arguments);
        this.result = none;
    }
    notify(next) {
        this.result = next;
        this.done();
    }
}
export const first = (runnable) => {
    const sink = new FirstSink();
    runnable.run(sink);
    return sink.result;
};
