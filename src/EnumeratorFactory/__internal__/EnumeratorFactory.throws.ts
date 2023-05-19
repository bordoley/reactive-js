import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Factory, error, pipe, raise } from "../../functions.js";
import EnumeratorFactory_fromFactory from "./EnumeratorFactory.fromFactory.js";

const EnumeratorFactory_throws: EnumeratorFactory.Signature["throws"] = (<
  T,
>(options?: {
  readonly raise?: Factory<unknown>;
}) => {
  const { raise: factory = raise } = options ?? {};
  return pipe(
    () => raise<T>(error(factory())),
    EnumeratorFactory_fromFactory(),
  );
}) as EnumeratorFactory.Signature["throws"];

export default EnumeratorFactory_throws;
