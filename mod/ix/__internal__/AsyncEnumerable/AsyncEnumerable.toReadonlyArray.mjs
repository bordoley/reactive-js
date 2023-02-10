/// <reference types="./AsyncEnumerable.toReadonlyArray.d.ts" />
import { pipe } from '../../../functions.mjs';
import Observable_empty from '../../../rx/__internal__/Observable/Observable.empty.mjs';
import Observable_isRunnable from '../../../rx/__internal__/Observable/Observable.isRunnable.mjs';
import RunnableObservable_toReadonlyArray from '../../../rx/__internal__/RunnableObservable/RunnableObservable.toReadonlyArray.mjs';
import AsyncEnumerable_toObservable from './AsyncEnumerable.toObservable.mjs';

const AsyncEnumerable_toReadonlyArray = () => (asyncEnumerable) => pipe(asyncEnumerable, AsyncEnumerable_toObservable(), x => (Observable_isRunnable(x) ? x : Observable_empty()), RunnableObservable_toReadonlyArray());

export { AsyncEnumerable_toReadonlyArray as default };
