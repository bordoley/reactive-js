import Enumerator_takeWhile from "../../Enumerator/__internal__/Enumerator.takeWhile.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Predicate, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_takeWhile: EnumeratorFactory.Signature["takeWhile"] = <
  T,
>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  composeLazy(
    EnumeratorFactory_enumerate<T>(),
    Enumerator_takeWhile(predicate, options),
  );

export default EnumeratorFactory_takeWhile;
