/// <reference types="./__internal__.functions.d.ts" />
import { forEach } from './__internal__.readonlyArray.mjs';
import { pipe, callWith } from './functions.mjs';

function decorateMap(v, ...sideffects) {
    pipe(sideffects.slice(0, -1), forEach(callWith(v)));
    return sideffects[sideffects.length - 1](v);
}

export { decorateMap };
