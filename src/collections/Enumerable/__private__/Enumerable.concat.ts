import { EnumerableLike } from "../../../collections.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_concatMany from "./Enumerable.concatMany.js";

const Enumerable_concat: Enumerable.Signature["concat"] = (<T>(
  ...enumerables: readonly EnumerableLike<T>[]
) => Enumerable_concatMany<T>(enumerables)) as Enumerable.Signature["concat"];

export default Enumerable_concat;
