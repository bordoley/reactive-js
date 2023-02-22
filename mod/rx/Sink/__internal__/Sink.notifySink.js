/// <reference types="./Sink.notifySink.d.ts" />

import { SinkLike_notify } from "../../../rx.js";
const Sink_notifySink = (sink) => (next) => sink[SinkLike_notify](next);
export default Sink_notifySink;
