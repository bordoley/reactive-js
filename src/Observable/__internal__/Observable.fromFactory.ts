import type * as Observable from "../../Observable.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import { Factory, compose } from "../../functions.js";
import Observable_map from "./Observable.map.js";

const Observable_fromFactory: Observable.Signature["fromFactory"] = (options?: {
  readonly delay: number;
}) =>
  compose(
    Optional_toRunnable(options),
    Observable_map((f: Factory<unknown>) => f()),
  );

export default Observable_fromFactory;
