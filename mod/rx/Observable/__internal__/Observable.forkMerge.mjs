/// <reference types="./Observable.forkMerge.d.ts" />
import ReadonlyArray_map from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.mjs';
import { pipe } from '../../../functions.mjs';
import Observable_mergeObservables from './Observable.mergeObservables.mjs';

const Observable_forkMerge = (...ops) => (obs) => pipe(ops, ReadonlyArray_map(op => op(obs)), Observable_mergeObservables);

export { Observable_forkMerge as default };
