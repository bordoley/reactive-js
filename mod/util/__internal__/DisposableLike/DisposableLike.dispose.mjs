/// <reference types="./DisposableLike.dispose.d.ts" />
import { DisposableLike_dispose } from '../../../util.mjs';

const dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};

export { dispose };
