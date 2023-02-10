/// <reference types="./Sink.notifySink.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';

const Sink_notifySink = (sink) => (next) => sink[SinkLike_notify](next);

export { Sink_notifySink as default };
