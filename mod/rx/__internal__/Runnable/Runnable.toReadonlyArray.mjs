/// <reference types="./Runnable.toReadonlyArray.d.ts" />
import { pipe } from '../../../functions.mjs';
import Runnable_forEach from './Runnable.forEach.mjs';
import Runnable_run from './Runnable.run.mjs';

const Runnable_toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, Runnable_forEach(x => result.push(x)), Runnable_run());
    return result;
};

export { Runnable_toReadonlyArray as default };
