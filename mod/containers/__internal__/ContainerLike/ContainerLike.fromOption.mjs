/// <reference types="./ContainerLike.fromOption.d.ts" />
import { pipe, isSome } from '../../../functions.mjs';

const fromOption = ({ fromArray }, options) => option => pipe(isSome(option) ? [option] : [], fromArray({ ...options }));

export { fromOption as default };
