import Enumerator_decodeWithCharset from "../../Enumerator/__internal__/Enumerator.decodeWithCharset.js";
import type * as Observable from "../../Observable.js";
import Observer_createDecodeWithCharsetObserver from "../../Observer/__internal__/Observer.createDecodeWithCharsetObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_decodeWithCharset: Observable.Signature["decodeWithCharset"] =
  options => {
    const charset = options?.charset ?? "utf-8";
    const op = pipe(Observer_createDecodeWithCharsetObserver, partial(charset));

    return Observable_liftPure(Enumerator_decodeWithCharset(charset), op);
  };

export default Observable_decodeWithCharset;
