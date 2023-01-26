/// <reference types="./Observable.forkMerge.d.ts" />
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { pipe } from '../../../functions.mjs';
import Observable$mergeObservables from './Observable.mergeObservables.mjs';

const Observable$forkMerge = (...ops) => (obs) => pipe(ops, ReadonlyArray$map(op => op(obs)), Observable$mergeObservables);

export { Observable$forkMerge as default };
