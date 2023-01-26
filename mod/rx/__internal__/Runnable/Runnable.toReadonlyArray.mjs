/// <reference types="./Runnable.toReadonlyArray.d.ts" />
import { pipe } from '../../../functions.mjs';
import Runnable$forEach from './Runnable.forEach.mjs';
import Runnable$run from './Runnable.run.mjs';

const Runnable$toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, Runnable$forEach(x => result.push(x)), Runnable$run());
    return result;
};

export { Runnable$toReadonlyArray as default };
