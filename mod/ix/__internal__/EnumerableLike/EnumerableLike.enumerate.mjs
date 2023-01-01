/// <reference types="./EnumerableLike.enumerate.d.ts" />
import { none } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';

const EnumerableLike__enumerate = () => (enumerable) => enumerable[InteractiveContainerLike_interact](none);

export { EnumerableLike__enumerate as default };
