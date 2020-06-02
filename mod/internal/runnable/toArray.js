import { AbstractSink } from "./sink.js";
class ToArraySink extends AbstractSink {
    constructor() {
        super(...arguments);
        this.acc = [];
    }
    notify(next) {
        this.acc.push(next);
    }
}
const _toArray = (runnable) => {
    const sink = new ToArraySink();
    runnable.run(sink);
    return sink.acc;
};
export const toArray = () => _toArray;
