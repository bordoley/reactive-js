import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatMany from "./Enumerator.concatMany.js";

const Enumerator_concatWith: <T>(
  ...tail: EnumeratorLike<T>[]
) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> =
  <T>(...tail: EnumeratorLike<T>[]) =>
  (fst: EnumeratorLike<T>) =>
    Enumerator_concatMany([fst, ...tail]);

export default Enumerator_concatWith;
