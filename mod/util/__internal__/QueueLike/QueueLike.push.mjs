/// <reference types="./QueueLike.push.d.ts" />
import { QueueLike_push } from '../util.internal.mjs';

// FIXME: Maybe this should be pipeable?
const QueueLike__push = (queue, value) => queue[QueueLike_push](value);

export { QueueLike__push as default };
