/// <reference types="./InteractiveContainerLike.interact.d.ts" />
import { InteractiveContainerLike_interact } from '../../../ix.mjs';

const interact = (ctx) => (enumerable) => enumerable[InteractiveContainerLike_interact](ctx);

export { interact as default };
