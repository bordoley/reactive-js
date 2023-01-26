/// <reference types="./Observable.concatAll.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import Observable$mergeAll from './Observable.mergeAll.mjs';

const Observable$concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return Observable$mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export { Observable$concatAll as default };
