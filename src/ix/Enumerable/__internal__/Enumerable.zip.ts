import { EnumerableLike } from "../../../ix.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_zipMany from "./Enumerable.zipMany.js";

const Enumerable_zip: Enumerable.Signature["zip"] = (<T>(
  ...enumerables: EnumerableLike<T>[]
) => Enumerable_zipMany(enumerables)) as Enumerable.Signature["zip"];

export default Enumerable_zip;
