/// <reference types="./Sink.notify.d.ts" />

import { ObserverLike_notify } from "../../../rx.js";
const Sink_notify = (v) => (sink) => {
    sink[ObserverLike_notify](v);
    return sink;
};
export default Sink_notify;
