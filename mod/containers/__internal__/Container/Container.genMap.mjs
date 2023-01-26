/// <reference types="./Container.genMap.d.ts" />
import { compose, pipe } from '../../../functions.mjs';

const Container_genMap = (m, mapper, options) => compose(m.map(x => pipe(x, mapper, m.fromIterable(options))), m.concatAll(options));

export { Container_genMap as default };
