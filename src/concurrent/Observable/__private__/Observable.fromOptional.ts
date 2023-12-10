import { compose, isSome, none } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const Observable_fromOptional: Observable.Signature["fromOptional"] =
  (options?: { delay: number }) =>
    compose(
      x => (isSome(x) ? [x] : []),
      Observable_fromReadonlyArray(
        isSome(options) ? { ...options, delayStart: true } : none,
      ),
    );

export default Observable_fromOptional;
