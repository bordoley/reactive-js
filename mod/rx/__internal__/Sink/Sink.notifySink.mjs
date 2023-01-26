/// <reference types="./Sink.notifySink.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';

const Sink$notifySink = (sink) => (next) => sink[SinkLike_notify](next);

export { Sink$notifySink as default };
