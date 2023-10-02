import { EnumerableLike } from "../../../ix.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_zipMany from "./Enumerable.zipMany.js";

const Enumerable_zipWith: Enumerable.Signature["zipWith"] = ((
    ...tail: readonly EnumerableLike<any>[]
  ) =>
  (fst: EnumerableLike<any>) =>
    Enumerable_zipMany([fst, ...tail])) as Enumerable.Signature["zipWith"];

export default Enumerable_zipWith;
