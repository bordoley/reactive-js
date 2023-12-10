import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createDecodeWithCharsetObserver from "../../Observer/__private__/Observer.createDecodeWithCharsetObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_decodeWithCharset: Observable.Signature["decodeWithCharset"] =
  options =>
    pipe(
      Observer_createDecodeWithCharsetObserver,
      partial(options?.charset ?? "utf-8"),
      Observable_liftPure,
    );

export default Observable_decodeWithCharset;
