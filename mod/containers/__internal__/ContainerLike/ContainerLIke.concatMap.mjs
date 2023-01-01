/// <reference types="./ContainerLIke.concatMap.d.ts" />
import { compose } from '../../../functions.mjs';

const ContainerLike__concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));

export { ContainerLike__concatMap as default };
