/// <reference types="./SinkLike.d.ts" />
import { R as ReactiveContainerLike_sinkInto } from '../rx-fcdda9a1.mjs';
import { SinkLike_notify } from '../util.mjs';

const notify = (v) => (sink) => {
    sink[SinkLike_notify](v);
    return sink;
};
const notifySink = (sink) => (next) => sink[SinkLike_notify](next);
const sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};

export { notify, notifySink, sourceFrom };
