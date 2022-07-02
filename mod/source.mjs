/// <reference types="./source.d.ts" />
import { __DEV__ } from './__internal__.env.mjs';
import { AbstractLiftable, AbtractDisposableLiftable } from './liftable.mjs';

const assertState = (sink) => {
    if (__DEV__) {
        sink.assertState();
    }
};
class AbstractSource extends AbstractLiftable {
}
class AbtractDisposableSource extends AbtractDisposableLiftable {
}
const notify = (v) => (sink) => {
    sink.notify(v);
    return sink;
};
const notifySink = (sink) => (next) => sink.notify(next);
const sinkInto = (sink) => source => {
    source.sink(sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source.sink(sink);
    return sink;
};

export { AbstractSource, AbtractDisposableSource, assertState, notify, notifySink, sinkInto, sourceFrom };
