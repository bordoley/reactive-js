import { AbstractSink } from "./sink.js";
class ForEachSink extends AbstractSink {
    constructor(notify) {
        super();
        this.notify = notify;
    }
}
export const forEach = (f) => runnable => runnable.run(new ForEachSink(f));
