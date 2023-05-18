import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_concatMany from "./EnumeratorFactory.concatMany.js";

const EnumeratorFactory_concatWith: EnumeratorFactory.Signature["concatWith"] =
  (<T>(...tail: EnumeratorFactoryLike<T>[]) =>
    (fst: EnumeratorFactoryLike<T>) =>
      EnumeratorFactory_concatMany([
        fst,
        ...tail,
      ])) as EnumeratorFactory.Signature["concatWith"];

export default EnumeratorFactory_concatWith;
