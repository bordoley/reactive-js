import { Equality, Function1, isEqualTo } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_someSatisfy from "./Enumerator.someSatisfy.js";

const Enumerator_contains: <T>(
  value: T,
  options?: {
    readonly equality?: Equality<T>;
  },
) => Function1<EnumeratorLike<T>, boolean> = (value, options) =>
  Enumerator_someSatisfy(isEqualTo(value, options));

export default Enumerator_contains;
