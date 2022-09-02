/// <reference types="./DisposableLike.create.d.ts" />
import { pipe } from '../../functions.mjs';
import { createInstanceFactory } from '../mixins.mjs';
import { disposableMixin } from './DisposableLike.mixins.mjs';
import { dispose } from './DisposableLike.operators.mjs';

const createDisposable = 
/*@__PURE__*/ createInstanceFactory(disposableMixin);
const disposed = /*@__PURE__*/ (() => {
    const instance = createDisposable();
    pipe(instance, dispose());
    return instance;
})();

export { createDisposable, disposed };
