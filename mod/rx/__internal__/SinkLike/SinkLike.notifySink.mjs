/// <reference types="./SinkLike.notifySink.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';

const notifySink = (sink) => (next) => sink[SinkLike_notify](next);

export { notifySink as default };
