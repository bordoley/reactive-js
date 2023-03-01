/// <reference types="./Sink.notifySink.d.ts" />

import { ObserverLike_notify } from "../../../rx.js";
const Sink_notifySink = (sink) => (next) => sink[ObserverLike_notify](next);
export default Sink_notifySink;
