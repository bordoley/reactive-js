/// <reference types="./ObservableLike.forkCombineLatest.d.ts" />
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { pipe } from '../../../functions.mjs';
import ObservableLike__latest from './ObservableLike.latest.mjs';

const ObservableLike__forkCombineLatest = ((...ops) => (obs) => ObservableLike__latest(pipe(ops, ReadonlyArrayLike__map(op => pipe(obs, op))), 1));

export { ObservableLike__forkCombineLatest as default };
