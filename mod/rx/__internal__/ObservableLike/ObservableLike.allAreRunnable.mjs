/// <reference types="./ObservableLike.allAreRunnable.d.ts" />
import ReadonlyArrayLike__every from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';

const ObservableLike__allAreRunnable = compose(ReadonlyArrayLike__map(ObservableLike__isRunnable), ReadonlyArrayLike__every(isTrue));

export { ObservableLike__allAreRunnable as default };
