/// <reference types="./Sink.notify.d.ts" />

import { SinkLike_notify } from "../../../rx.js";
const Sink_notify = (v) => (sink) => {
    sink[SinkLike_notify](v);
    return sink;
};
export default Sink_notify;
