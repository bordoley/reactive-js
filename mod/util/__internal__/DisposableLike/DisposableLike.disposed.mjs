/// <reference types="./DisposableLike.disposed.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__create from './DisposableLike.create.mjs';
import DisposableLike__dispose from './DisposableLike.dispose.mjs';

const DisposableLike__disposed = /*@__PURE__*/ (() => {
    const instance = DisposableLike__create();
    pipe(instance, DisposableLike__dispose());
    return instance;
})();

export { DisposableLike__disposed as default };
