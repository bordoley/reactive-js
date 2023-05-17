import type * as Enumerator from "../../Enumerator.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatMany from "./Enumerator.concatMany.js";

const Enumerator_concat: Enumerator.Signature["concat"] = <T>(
  ...enumerators: readonly EnumeratorLike<T>[]
) => Enumerator_concatMany(enumerators);

export default Enumerator_concat;
