/// <reference types="./ObservableLike.concatAll.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../__internal__/constants.mjs';
import ObservableLike__mergeAll from './ObservableLike.mergeAll.mjs';

const ObservableLike__concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return ObservableLike__mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export { ObservableLike__concatAll as default };
