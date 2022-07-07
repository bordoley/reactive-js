/// <reference types="./__internal__.functions.d.ts" />
import { forEach } from './__internal__.readonlyArray.mjs';
import { pipe, callWith } from './functions.mjs';

function decorate(v, ...sideffects) {
    pipe(sideffects, forEach(callWith(v)));
}

export { decorate };
