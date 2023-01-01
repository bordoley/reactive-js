/// <reference types="./ContainerLike.mapTo.d.ts" />
import { pipe, returns } from '../../../functions.mjs';

const ContainerLike__mapTo = ({ map }, value) => pipe(value, returns, map);

export { ContainerLike__mapTo as default };
