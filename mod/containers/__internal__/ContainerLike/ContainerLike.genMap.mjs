/// <reference types="./ContainerLike.genMap.d.ts" />
import { compose, pipe } from '../../../functions.mjs';

const ContainerLike__genMap = (m, mapper, options) => compose(m.map(x => pipe(x, mapper, m.fromIterable(options))), m.concatAll(options));

export { ContainerLike__genMap as default };
