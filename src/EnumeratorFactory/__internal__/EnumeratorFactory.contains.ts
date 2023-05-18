import Enumerator_contains from "../../Enumerator/__internal__/Enumerator.contains.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Equality, compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_contains: EnumeratorFactory.Signature["contains"] = <T>(
  value: T,
  options?: {
    readonly equality?: Equality<T>;
  },
) =>
  compose(
    EnumeratorFactory_enumerate<T>(),
    Enumerator_contains<T>(value, options),
  );

export default EnumeratorFactory_contains;
