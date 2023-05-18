import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { EnumeratorFactoryLike } from "../../types.js";

const EnumeratorFactory_enumerate: EnumeratorFactory.Signature["enumerate"] =
  <T>() =>
  (factory: EnumeratorFactoryLike<T>) =>
    factory();

export default EnumeratorFactory_enumerate;
