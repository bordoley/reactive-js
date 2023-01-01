/// <reference types="./DisposableLike.dispose.d.ts" />
import { DisposableLike_dispose } from '../../../util.mjs';

const DisposableLike__dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};

export { DisposableLike__dispose as default };
