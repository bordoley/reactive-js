/// <reference types="./ContainerLIke.concatMap.d.ts" />
import { compose } from '../../../functions.mjs';

const concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));

export { concatMap as default };
