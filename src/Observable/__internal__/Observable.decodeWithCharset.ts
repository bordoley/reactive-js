import type * as Observable from "../../Observable.js";
import Observer_createDecodeWithCharsetObserver from "../../Observer/__internal__/Observer.createDecodeWithCharsetObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_decodeWithCharset: Observable.Signature["decodeWithCharset"] =
  options => {
    const charset = options?.charset ?? "utf-8";
    return pipe(
      Observer_createDecodeWithCharsetObserver,
      partial(charset),
      Observable_liftSource,
    );
  };

export default Observable_decodeWithCharset;
