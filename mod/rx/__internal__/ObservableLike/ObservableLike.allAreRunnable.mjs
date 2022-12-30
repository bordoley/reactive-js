/// <reference types="./ObservableLike.allAreRunnable.d.ts" />
import every from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import isRunnable from './ObservableLike.isRunnable.mjs';

const allAreRunnable = compose(map(isRunnable), every(isTrue));

export { allAreRunnable as default };
