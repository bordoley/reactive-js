import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Function1 } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_zipMany from "./EnumeratorFactory.zipMany.js";

const EnumeratorFactory_zipWith: EnumeratorFactory.Signature["zipWith"] = ((
    ...tail: readonly EnumeratorFactoryLike<any>[]
  ): Function1<EnumeratorFactoryLike<any>, EnumeratorFactoryLike<any>> =>
  (fst: EnumeratorFactoryLike<any>) =>
    EnumeratorFactory_zipMany([
      fst,
      ...tail,
    ])) as EnumeratorFactory.Signature["zipWith"];

export default EnumeratorFactory_zipWith;
