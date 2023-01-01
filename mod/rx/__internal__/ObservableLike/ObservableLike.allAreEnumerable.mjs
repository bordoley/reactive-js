/// <reference types="./ObservableLike.allAreEnumerable.d.ts" />
import ReadonlyArrayLike__every from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';

const ObservableLike__allAreEnumerable = compose(ReadonlyArrayLike__map(ObservableLike__isEnumerable), ReadonlyArrayLike__every(isTrue));

export { ObservableLike__allAreEnumerable as default };
