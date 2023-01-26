/// <reference types="./AsyncEnumerable.toReadonlyArray.d.ts" />
import { pipe } from '../../../functions.mjs';
import Observable$toReadonlyArray from '../../../rx/__internal__/Observable/Observable.toReadonlyArray.mjs';
import AsyncEnumerable$toObservable from './AsyncEnumerable.toObservable.mjs';

const AsyncEnumerable$toReadonlyArray = () => (asyncEnumerable) => pipe(asyncEnumerable, AsyncEnumerable$toObservable(), Observable$toReadonlyArray());

export { AsyncEnumerable$toReadonlyArray as default };
