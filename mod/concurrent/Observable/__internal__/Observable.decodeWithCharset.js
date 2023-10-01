/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createDecodeWithCharsetObserver from "../../Observer/__internal__/Observer.createDecodeWithCharsetObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_decodeWithCharset = options => pipe(Observer_createDecodeWithCharsetObserver, partial(options?.charset ?? "utf-8"), Observable_liftPure);
export default Observable_decodeWithCharset;
