import { partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DecodeWithCharsetOperator from "../../__internal__/operators/DecodeWithCharsetOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_decodeWithCharset: Observable.Signature["decodeWithCharset"] =
  (options =>
    pipe(
      DecodeWithCharsetOperator.create<ObserverLike>,
      partial(options),
      Observable_lift(),
    )) as Observable.Signature["decodeWithCharset"];

export default Observable_decodeWithCharset;
