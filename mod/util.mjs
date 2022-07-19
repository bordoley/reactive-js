/// <reference types="./util.d.ts" />
import { mixinDisposable } from './__internal__/util/DisposableLike.mjs';
import { pipe, instanceFactory } from './util/functions.mjs';

const createDisposable = /*@__PURE__*/ pipe(class Disposable {
}, mixinDisposable(), instanceFactory());

export { createDisposable };
