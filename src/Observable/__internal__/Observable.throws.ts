import type * as Observable from "../../Observable.js";
import { Factory, error, pipe, raise } from "../../functions.js";
import Observable_fromFactory from "./Observable.fromFactory.js";

const Observable_throws: Observable.Signature["throws"] = (<T>(options?: {
  readonly delay?: number;
  readonly raise?: Factory<unknown>;
}) => {
  const { raise: factory = raise } = options ?? {};
  return pipe(
    () => raise<T>(error(factory())),
    Observable_fromFactory(options as any),
  );
}) as Observable.Signature["throws"];

export default Observable_throws;
