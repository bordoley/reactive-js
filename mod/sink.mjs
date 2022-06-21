/// <reference types="./sink.d.ts" />
import { empty } from './container.mjs';
import { dispose, addDisposable, addOnDisposedWithError, addTeardown } from './disposable.mjs';
import { pipe } from './functions.mjs';
import { none } from './option.mjs';

function notifyDecodeWithCharset(next) {
    const data = this.textDecoder.decode(next, { stream: true });
    if (data.length > 0) {
        this.delegate.notify(data);
    }
}
function notifyDistinctUntilChanged(next) {
    this.assertState();
    const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
    if (shouldEmit) {
        this.prev = next;
        this.hasValue = true;
        this.delegate.notify(next);
    }
}
function notifyKeep(next) {
    this.assertState();
    if (this.predicate(next)) {
        this.delegate.notify(next);
    }
}
function notifyMap(next) {
    this.assertState();
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
}
function notifyOnNotify(next) {
    this.assertState();
    this.onNotify(next);
    this.delegate.notify(next);
}
function notifyPairwise(value) {
    this.assertState();
    const prev = this.hasPrev ? this.prev : none;
    this.hasPrev = true;
    this.prev = value;
    this.delegate.notify([prev, value]);
}
function notifyReduce(next) {
    this.assertState();
    this.acc = this.reducer(this.acc, next);
}
function notifyScan(next) {
    this.assertState();
    const nextAcc = this.reducer(this.acc, next);
    this.acc = nextAcc;
    this.delegate.notify(nextAcc);
}
function notifySkipFirst(next) {
    this.count++;
    if (this.count > this.skipCount) {
        this.delegate.notify(next);
    }
}
function notifyTakeFirst(next) {
    this.assertState();
    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
        pipe(this, dispose());
    }
}
const createTakeLastOperator = (m, constructor) => {
    constructor.prototype.notify = function notifyTakeLast(next) {
        this.assertState();
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    };
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => {
            const sink = new constructor(delegate, count);
            addDisposable(delegate, sink);
            addOnDisposedWithError(sink, delegate);
            addTeardown(sink, () => {
                pipe(sink.last, m.fromArray(), m.sink(delegate));
            });
            return sink;
        };
        return runnable => count > 0 ? pipe(runnable, m.lift(operator)) : empty(m);
    };
};
function notifyTakeWhile(next) {
    this.assertState();
    const satisfiesPredicate = this.predicate(next);
    if (satisfiesPredicate || this.inclusive) {
        this.delegate.notify(next);
    }
    if (!satisfiesPredicate) {
        pipe(this, dispose());
    }
}

export { createTakeLastOperator, notifyDecodeWithCharset, notifyDistinctUntilChanged, notifyKeep, notifyMap, notifyOnNotify, notifyPairwise, notifyReduce, notifyScan, notifySkipFirst, notifyTakeFirst, notifyTakeWhile };
