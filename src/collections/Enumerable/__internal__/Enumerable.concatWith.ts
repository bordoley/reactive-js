import { EnumerableLike } from "../../../collections.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_concatMany from "./Enumerable.concatMany.js";

const Enumerable_concatWith: Enumerable.Signature["concatWith"] =
  <T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]) =>
  (fst: EnumerableLike<T>) =>
    Enumerable_concatMany<T>([fst, snd, ...tail]);

export default Enumerable_concatWith;
