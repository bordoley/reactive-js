/// <reference types="./EnumerableLike.enumerate.d.ts" />
import { none } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';

const enumerate = () => (enumerable) => enumerable[InteractiveContainerLike_interact](none);

export { enumerate as default };
