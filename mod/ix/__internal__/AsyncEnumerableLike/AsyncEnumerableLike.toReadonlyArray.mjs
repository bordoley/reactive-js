/// <reference types="./AsyncEnumerableLike.toReadonlyArray.d.ts" />
import { pipe } from '../../../functions.mjs';
import ObservableLike__toReadonlyArray from '../../../rx/__internal__/ObservableLike/ObservableLike.toReadonlyArray.mjs';
import AsyncEnumerable__toObservable from './AsyncEnumerable.toObservable.mjs';

const AsyncEnumerableLike__toReadonlyArray = () => (asyncEnumerable) => pipe(asyncEnumerable, AsyncEnumerable__toObservable(), ObservableLike__toReadonlyArray());

export { AsyncEnumerableLike__toReadonlyArray as default };
