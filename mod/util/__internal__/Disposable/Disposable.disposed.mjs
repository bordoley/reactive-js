/// <reference types="./Disposable.disposed.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_create from './Disposable.create.mjs';
import Disposable_dispose from './Disposable.dispose.mjs';

const Disposable_disposed = /*@__PURE__*/ (() => {
    const instance = Disposable_create();
    pipe(instance, Disposable_dispose());
    return instance;
})();

export { Disposable_disposed as default };
