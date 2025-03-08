/// <reference types="./DisposableContainer.toPromise.d.ts" />

import { newInstance, pipe, } from "../../../functions.js";
import DisposableContainer_onComplete from "./DisposableContainer.onComplete.js";
import DisposableContainer_onError from "./DisposableContainer.onError.js";
const DisposableContainer_toPromise = (disposable) => newInstance(Promise, (resolve, reject) => pipe(disposable, DisposableContainer_onComplete(resolve), DisposableContainer_onError(reject)));
export default DisposableContainer_toPromise;
