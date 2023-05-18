import { EnumeratorLike } from "../../types.js";
import Enumerator_zipMany from "./Enumerator.zipMany.js";

const Enumerator_zip = (...enumerators: readonly EnumeratorLike<unknown>[]) =>
  Enumerator_zipMany(enumerators);

export default Enumerator_zip;
