/// <reference types="./Runnable.last.d.ts" />
import { none, pipe } from '../../../functions.mjs';
import Runnable$forEach from './Runnable.forEach.mjs';
import Runnable$run from './Runnable.run.mjs';

const Runnable$last = () => src => {
    let result = none;
    pipe(src, Runnable$forEach(next => {
        result = next;
    }), Runnable$run());
    return result;
};

export { Runnable$last as default };
