/// <reference types="./ObservableLike.allAreEnumerable.d.ts" />
import every from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import isEnumerable from './ObservableLike.isEnumerable.mjs';

const allAreEnumerable = compose(map(isEnumerable), every(isTrue));

export { allAreEnumerable as default };
