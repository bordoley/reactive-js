/// <reference types="./RunnableLike.toReadonlyArray.d.ts" />
import { pipe } from '../../../functions.mjs';
import RunnableLike__forEach from './RunnableLike.forEach.mjs';
import RunnableLike__run from './RunnableLike.run.mjs';

const RunnableLike__toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, RunnableLike__forEach(x => result.push(x)), RunnableLike__run());
    return result;
};

export { RunnableLike__toReadonlyArray as default };
