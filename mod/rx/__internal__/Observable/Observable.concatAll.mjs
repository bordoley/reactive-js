/// <reference types="./Observable.concatAll.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import Observable_mergeAll from './Observable.mergeAll.mjs';

const Observable_concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return Observable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export { Observable_concatAll as default };
