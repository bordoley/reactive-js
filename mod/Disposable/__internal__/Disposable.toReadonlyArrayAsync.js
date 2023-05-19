/// <reference types="./Disposable.toReadonlyArrayAsync.d.ts" />

import { pipe } from "../../functions.js";
import Disposable_onComplete from "./Disposable.onComplete.js";
import Disposable_onError from "./Disposable.onError.js";
const Disposable_toReadonlyArrayAsync = () => disposable => new Promise((resolve, reject) => {
    pipe(disposable, Disposable_onComplete(() => resolve([])), Disposable_onError(reject));
});
export default Disposable_toReadonlyArrayAsync;
