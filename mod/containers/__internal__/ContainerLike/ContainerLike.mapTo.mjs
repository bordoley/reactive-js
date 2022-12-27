/// <reference types="./ContainerLike.mapTo.d.ts" />
import { pipe, returns } from '../../../functions.mjs';

const mapTo = ({ map }, value) => pipe(value, returns, map);

export { mapTo as default };
