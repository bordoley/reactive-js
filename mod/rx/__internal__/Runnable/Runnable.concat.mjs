/// <reference types="./Runnable.concat.d.ts" />
import ReadonlyArray$toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import { pipe } from '../../../functions.mjs';
import Runnable$concatAll from './Runnable.concatAll.mjs';

const Runnable$concat = (...runnables) => pipe(runnables, ReadonlyArray$toRunnable(), Runnable$concatAll());

export { Runnable$concat as default };
