import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_zipMany from "./EnumeratorFactory.zipMany.js";

const EnumeratorFactory_zip: EnumeratorFactory.Signature["zip"] = ((
  ...factories: readonly EnumeratorFactoryLike<unknown>[]
) =>
  EnumeratorFactory_zipMany(factories)) as EnumeratorFactory.Signature["zip"];

export default EnumeratorFactory_zip;
