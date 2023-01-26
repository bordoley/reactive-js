/// <reference types="./Disposable.dispose.d.ts" />
import { DisposableLike_dispose } from '../../../util.mjs';

const Disposable$dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};

export { Disposable$dispose as default };
