/// <reference types="./SinkLike.notifySink.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';

const SinkLike__notifySink = (sink) => (next) => sink[SinkLike_notify](next);

export { SinkLike__notifySink as default };
