/// <reference types="./liftable.d.ts" />
import { compose, pipe, pipeLazy } from './functions.mjs';

const genMap = (m, mapper, options) => compose(m.map(x => pipe(pipeLazy(x, mapper), m.fromIterator(options))), m.concatAll(options));

export { genMap };
