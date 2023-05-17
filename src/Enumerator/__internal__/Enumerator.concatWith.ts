import type * as Enumerator from "../../Enumerator.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatMany from "./Enumerator.concatMany.js";

const Enumerator_concatWith: Enumerator.Signature["concatWith"] = (<T>(
    ...tail: EnumeratorLike<T>[]
  ) =>
  (fst: EnumeratorLike<T>) =>
    Enumerator_concatMany([
      fst,
      ...tail,
    ])) as Enumerator.Signature["concatWith"];

export default Enumerator_concatWith;
