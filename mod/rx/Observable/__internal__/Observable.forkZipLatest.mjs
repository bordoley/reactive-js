/// <reference types="./Observable.forkZipLatest.d.ts" />
import ReadonlyArray_map from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.mjs';
import { pipe } from '../../../functions.mjs';
import Observable_latest from './Observable.latest.mjs';

const Observable_forkZipLatest = ((...ops) => (obs) => Observable_latest(pipe(ops, ReadonlyArray_map(op => pipe(obs, op))), 2));

export { Observable_forkZipLatest as default };
