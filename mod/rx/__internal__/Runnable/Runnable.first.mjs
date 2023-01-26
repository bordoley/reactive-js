/// <reference types="./Runnable.first.d.ts" />
import { none, pipe } from '../../../functions.mjs';
import Runnable$forEach from './Runnable.forEach.mjs';
import Runnable$run from './Runnable.run.mjs';
import Runnable$takeFirst from './Runnable.takeFirst.mjs';

const Runnable$first = () => src => {
    let result = none;
    pipe(src, Runnable$takeFirst(), Runnable$forEach(next => {
        result = next;
    }), Runnable$run());
    return result;
};

export { Runnable$first as default };
