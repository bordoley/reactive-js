/// <reference types="./Disposable.toErrorHandler.d.ts" />

import { error, pipe } from "../../../functions.js";
import dispose from "./Disposable.dispose.js";
const Disposable_toErrorHandler = (disposable) => e => pipe(disposable, dispose(error(e)));
export default Disposable_toErrorHandler;
