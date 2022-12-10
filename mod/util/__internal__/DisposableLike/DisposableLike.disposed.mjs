/// <reference types="./DisposableLike.disposed.d.ts" />
import { pipe } from '../../../functions.mjs';
import create from './DisposableLike.create.mjs';
import dispose from './DisposableLike.dispose.mjs';

const disposed = /*@__PURE__*/ (() => {
    const instance = create();
    pipe(instance, dispose());
    return instance;
})();

export { disposed as default };
