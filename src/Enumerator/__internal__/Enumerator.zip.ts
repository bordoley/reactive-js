import type * as Enumerator from "../../Enumerator.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_zipMany from "./Enumerator.zipMany.js";

const Enumerator_zip: Enumerator.Signature["zip"] = ((
  ...enumerators: readonly EnumeratorLike<unknown>[]
) => Enumerator_zipMany(enumerators)) as Enumerator.Signature["zip"];

export default Enumerator_zip;
