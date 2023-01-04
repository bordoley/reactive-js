/// <reference types="./ObservableLike.forkZipLatest.d.ts" />
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { pipe } from '../../../functions.mjs';
import ObservableLike__latest from './ObservableLike.latest.mjs';

const ObservableLike__forkZipLatest = ((...ops) => (obs) => ObservableLike__latest(pipe(ops, ReadonlyArrayLike__map(op => pipe(obs, op))), 2));

export { ObservableLike__forkZipLatest as default };
