import { RunnableLike } from "../../../computations.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_concatMany from "./Runnable.concatMany.js";

const Runnable_concatWith: Runnable.Signature["concatWith"] =
  <T>(...tail: RunnableLike<T>[]) =>
  (fst: RunnableLike<T>) =>
    Runnable_concatMany([fst, ...tail]);

export default Runnable_concatWith;
