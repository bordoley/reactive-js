/// <reference types="./sink.d.ts" />
import { dispose } from './disposable.mjs';
import { pipe } from './functions.mjs';
import { none } from './option.mjs';

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
function notifyTakeFirst(next) {
    this.assertState();
    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
        pipe(this, dispose());
    }
}
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

export { notifyDistinctUntilChanged, notifyKeep, notifyMap, notifyOnNotify, notifyPairwise, notifyReduce, notifyScan, notifyTakeFirst, notifyTakeWhile };
