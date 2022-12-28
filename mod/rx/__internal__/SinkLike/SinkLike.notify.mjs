/// <reference types="./SinkLike.notify.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';

const notify = (v) => (sink) => {
    sink[SinkLike_notify](v);
    return sink;
};

export { notify as default };
