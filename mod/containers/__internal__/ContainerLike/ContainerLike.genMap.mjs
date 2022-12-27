/// <reference types="./ContainerLike.genMap.d.ts" />
import { compose, pipe } from '../../../functions.mjs';

const genMap = (m, mapper, options) => compose(m.map(x => pipe(x, mapper, m.fromIterable(options))), m.concatAll(options));

export { genMap as default };
