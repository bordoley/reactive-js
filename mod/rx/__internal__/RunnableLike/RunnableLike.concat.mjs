/// <reference types="./RunnableLike.concat.d.ts" />
import ReadonlyArrayLike__toRunnable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import { pipe } from '../../../functions.mjs';
import RunnableLike__concatAll from './RunnableLike.concatAll.mjs';

const RunnableLike__concat = (...runnables) => pipe(runnables, ReadonlyArrayLike__toRunnable(), RunnableLike__concatAll());

export { RunnableLike__concat as default };
