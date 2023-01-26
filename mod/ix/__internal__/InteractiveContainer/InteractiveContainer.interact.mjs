/// <reference types="./InteractiveContainer.interact.d.ts" />
import { InteractiveContainerLike_interact } from '../../../ix.mjs';

const InteractiveContainer$interact = (ctx) => (enumerable) => enumerable[InteractiveContainerLike_interact](ctx);

export { InteractiveContainer$interact as default };
