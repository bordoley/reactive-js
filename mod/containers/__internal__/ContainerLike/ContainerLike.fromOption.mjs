/// <reference types="./ContainerLike.fromOption.d.ts" />
import { pipe, isSome } from '../../../functions.mjs';

const ContainerLike__fromOption = ({ fromArray }, 
// FIXME: How do we omit the start/count options sanely
options) => option => pipe(isSome(option) ? [option] : [], fromArray(options));

export { ContainerLike__fromOption as default };
