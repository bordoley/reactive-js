/// <reference types="./AsyncEnumerable.toReadonlyArray.d.ts" />
import { pipe } from '../../../functions.mjs';
import Observable_toReadonlyArray from '../../../rx/__internal__/Observable/Observable.toReadonlyArray.mjs';
import AsyncEnumerable_toObservable from './AsyncEnumerable.toObservable.mjs';

const AsyncEnumerable_toReadonlyArray = () => (asyncEnumerable) => pipe(asyncEnumerable, AsyncEnumerable_toObservable(), Observable_toReadonlyArray());

export { AsyncEnumerable_toReadonlyArray as default };
