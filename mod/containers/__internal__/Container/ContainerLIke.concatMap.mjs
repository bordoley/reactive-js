/// <reference types="./ContainerLIke.concatMap.d.ts" />
import { compose } from '../../../functions.mjs';

const Container_concatMap = ({ map, concatAll }, mapper, options) => compose(map(mapper), concatAll(options));

export { Container_concatMap as default };
