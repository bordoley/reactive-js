/// <reference types="./SinkLike.notify.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';

const SinkLike__notify = (v) => (sink) => {
    sink[SinkLike_notify](v);
    return sink;
};

export { SinkLike__notify as default };
