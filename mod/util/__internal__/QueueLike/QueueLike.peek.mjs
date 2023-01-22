/// <reference types="./QueueLike.peek.d.ts" />
import { QueueLike_peek } from '../util.internal.mjs';

const QueueLike__peek = (queue) => queue[QueueLike_peek]();

export { QueueLike__peek as default };
