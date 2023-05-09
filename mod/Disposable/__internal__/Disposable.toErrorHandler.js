/// <reference types="./Disposable.toErrorHandler.d.ts" />

import { error } from "../../functions.js";
import { DisposableLike_dispose } from "../../types.js";
const Disposable_toErrorHandler = (disposable) => e => disposable[DisposableLike_dispose](error(e));
export default Disposable_toErrorHandler;
