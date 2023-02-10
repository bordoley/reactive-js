/// <reference types="./Runnable.first.d.ts" />
import { none, pipe } from '../../../functions.mjs';
import Runnable_forEach from './Runnable.forEach.mjs';
import Runnable_run from './Runnable.run.mjs';
import Runnable_takeFirst from './Runnable.takeFirst.mjs';

const Runnable_first = () => src => {
    let result = none;
    pipe(src, Runnable_takeFirst(), Runnable_forEach(next => {
        result = next;
    }), Runnable_run());
    return result;
};

export { Runnable_first as default };
