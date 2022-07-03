/// <reference types="./sink.d.ts" />
import { __DEV__ } from './__internal__.env.mjs';

const assertState = (sink) => {
    if (__DEV__) {
        sink.assertState();
    }
};
const notify = (v) => (sink) => {
    sink.notify(v);
    return sink;
};
const notifySink = (sink) => (next) => sink.notify(next);

export { assertState, notify, notifySink };
