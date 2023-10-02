import { ObserverLike } from "../../../concurrent.js";
import { Factory, error, raise } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_createRunnableWithSideEffects from "./Observable.createRunnableWithSideEffects.js";

const Observable_throws: Observable.Signature["throws"] = (options?: {
  readonly raise?: Factory<unknown>;
}) =>
  Observable_createRunnableWithSideEffects((_: ObserverLike) => {
    const { raise: factory = raise } = options ?? {};
    raise(error(factory()));
  });

export default Observable_throws;
