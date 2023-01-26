/// <reference types="./Disposable.disposed.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable$create from './Disposable.create.mjs';
import Disposable$dispose from './Disposable.dispose.mjs';

const Disposable$disposed = /*@__PURE__*/ (() => {
    const instance = Disposable$create();
    pipe(instance, Disposable$dispose());
    return instance;
})();

export { Disposable$disposed as default };
