/// <reference types="./ObservableLike.forkMerge.d.ts" />
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { pipe } from '../../../functions.mjs';
import ObservableLike__mergeObservables from './ObservableLike.mergeObservables.mjs';

const ObservableLike__forkMerge = (...ops) => (obs) => pipe(ops, ReadonlyArrayLike__map(op => op(obs)), ObservableLike__mergeObservables);

export { ObservableLike__forkMerge as default };
