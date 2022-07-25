/// <reference types="./ReactiveSinkLike.d.ts" />
import { ReactiveSinkLike_notify } from '../rx.mjs';

const notify = (v) => (sink) => {
    sink[ReactiveSinkLike_notify](v);
    return sink;
};
const notifySink = (sink) => (next) => sink[ReactiveSinkLike_notify](next);

export { notify, notifySink };
