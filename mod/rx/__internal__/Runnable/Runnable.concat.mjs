/// <reference types="./Runnable.concat.d.ts" />
import ReadonlyArray_toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import { pipe } from '../../../functions.mjs';
import Runnable_concatAll from './Runnable.concatAll.mjs';

const Runnable_concat = (...runnables) => pipe(runnables, ReadonlyArray_toRunnable(), Runnable_concatAll());

export { Runnable_concat as default };
