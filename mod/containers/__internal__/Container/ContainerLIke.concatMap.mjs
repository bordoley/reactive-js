/// <reference types="./ContainerLIke.concatMap.d.ts" />
import { compose } from '../../../functions.mjs';

const Container$concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));

export { Container$concatMap as default };
