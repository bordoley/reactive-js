/// <reference types="./Sink.notify.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';

const Sink_notify = (v) => (sink) => {
    sink[SinkLike_notify](v);
    return sink;
};

export { Sink_notify as default };
