/// <reference types="./SinkLike.d.ts" />
import { SinkLike_notify } from '../util.mjs';

const notify = (v) => (sink) => {
    sink[SinkLike_notify](v);
    return sink;
};
const notifySink = (sink) => (next) => sink[SinkLike_notify](next);

export { notify, notifySink };
