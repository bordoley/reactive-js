/// <reference types="./Observable.forkCombineLatest.d.ts" />
import ReadonlyArray_map from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.mjs';
import { pipe } from '../../../functions.mjs';
import Observable_latest from './Observable.latest.mjs';

const Observable_forkCombineLatest = ((...ops) => (obs) => Observable_latest(pipe(ops, ReadonlyArray_map(op => pipe(obs, op))), 1));

export { Observable_forkCombineLatest as default };
