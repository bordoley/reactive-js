import { lift } from "./lift.js";
import { AbstractDelegatingSink } from "./sink.js";
class ScanSink extends AbstractDelegatingSink {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
    }
    notify(next) {
        const nextAcc = this.scanner(this.acc, next);
        this.acc = nextAcc;
        this.delegate.notify(nextAcc);
    }
}
export const scan = (scanner, initialValue) => {
    const operator = (sink) => new ScanSink(sink, scanner, initialValue());
    return lift(operator);
};
