import { DeferableLike } from "../../../computations.js";
import type * as Deferable from "../../Deferable.js";
import Deferable_concatMany from "./Deferable.concatMany.js";

const Deferable_concatWith: Deferable.Signature["concatWith"] =
  <T>(...tail: DeferableLike<T>[]) =>
  (fst: DeferableLike<T>) =>
    Deferable_concatMany([fst, ...tail]);

export default Deferable_concatWith;
