/// <reference types="./Enumerable.enumerate.d.ts" />
import { none } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';

const Enumerable$enumerate = () => (enumerable) => enumerable[InteractiveContainerLike_interact](none);

export { Enumerable$enumerate as default };
