/// <reference types="./StatefulContainerLike.d.ts" />
import { newInstance, pipe, compose, pipeLazy } from '../functions.mjs';

const encodeUtf8 = (m) => obs => m.defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(obs, m.map(s => textEncoder.encode(s)));
});
const genMap = (m, mapper, options) => compose(m.map(x => pipe(pipeLazy(x, mapper), m.fromIterator(options))), m.concatAll(options));

export { encodeUtf8, genMap };
