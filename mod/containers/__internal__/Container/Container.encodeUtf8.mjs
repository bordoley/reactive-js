/// <reference types="./Container.encodeUtf8.d.ts" />
import { newInstance, pipe } from '../../../functions.mjs';

const Container$encodeUtf8 = (m) => obs => m.defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(obs, m.map(s => textEncoder.encode(s)));
});

export { Container$encodeUtf8 as default };
