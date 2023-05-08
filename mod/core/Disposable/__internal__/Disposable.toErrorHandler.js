/// <reference types="./Disposable.toErrorHandler.d.ts" />

import { DisposableLike_dispose } from "../../../core.js";
import { error } from "../../../functions.js";
const Disposable_toErrorHandler = (disposable) => e => disposable[DisposableLike_dispose](error(e));
export default Disposable_toErrorHandler;
