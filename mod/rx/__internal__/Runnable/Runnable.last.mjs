/// <reference types="./Runnable.last.d.ts" />
import { none, pipe } from '../../../functions.mjs';
import Runnable_forEach from './Runnable.forEach.mjs';
import Runnable_run from './Runnable.run.mjs';

const Runnable_last = () => src => {
    let result = none;
    pipe(src, Runnable_forEach(next => {
        result = next;
    }), Runnable_run());
    return result;
};

export { Runnable_last as default };
