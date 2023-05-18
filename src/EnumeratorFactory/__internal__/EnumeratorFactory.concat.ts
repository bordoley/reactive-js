import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_concatMany from "./EnumeratorFactory.concatMany.js";

const EnumeratorFactory_concat: EnumeratorFactory.Signature["concat"] = <T>(
  ...factories: readonly EnumeratorFactoryLike<T>[]
) => EnumeratorFactory_concatMany<T>(factories);

export default EnumeratorFactory_concat;
