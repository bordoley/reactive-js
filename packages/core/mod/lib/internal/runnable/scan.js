import { lift } from "./lift.js";
import { AbstractDelegatingSink } from "./sink.js";
import { notifyScan } from "../notifyMixins.js";
class ScanSink extends AbstractDelegatingSink {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
    }
    notify(next) {
        notifyScan(this, next);
    }
}
export const scan = (scanner, initialValue) => {
    const operator = (sink) => new ScanSink(sink, scanner, initialValue());
    return lift(operator);
};
