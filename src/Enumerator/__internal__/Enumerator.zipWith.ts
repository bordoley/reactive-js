import type * as Enumerator from "../../Enumerator.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_zipMany from "./Enumerator.zipMany.js";

const Enumerator_zipWith: Enumerator.Signature["zipWith"] = ((
    ...tail: readonly EnumeratorLike<any>[]
  ): Function1<EnumeratorLike<any>, EnumeratorLike<any>> =>
  (fst: EnumeratorLike<any>) =>
    Enumerator_zipMany([fst, ...tail])) as Enumerator.Signature["zipWith"];

export default Enumerator_zipWith;
