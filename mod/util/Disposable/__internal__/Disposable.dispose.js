/// <reference types="./Disposable.dispose.d.ts" />

import { DisposableLike_dispose } from "../../../util.js";
const Disposable_dispose = (e) => disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
};
export default Disposable_dispose;
