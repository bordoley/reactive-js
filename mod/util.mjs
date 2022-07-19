/// <reference types="./util.d.ts" />
import { DisposableMixin_disposables, mixinDisposable } from './__internal__/util/disposables.mjs';
import { DisposableLike_error, DisposableLike_isDisposed } from './util/DisposableLike.mjs';
import { none } from './util/Option.mjs';
import { pipe, instanceFactory } from './util/functions.mjs';

var _a, _b, _c, _d;
const createDisposable = /*@__PURE__*/ pipe((_d = class Disposable {
        constructor() {
            this[_a] = none;
            this[_b] = false;
            this[_c] = new Set();
        }
    },
    _a = DisposableLike_error,
    _b = DisposableLike_isDisposed,
    _c = DisposableMixin_disposables,
    _d), mixinDisposable(), instanceFactory());

export { createDisposable };
