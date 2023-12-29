import { RunnableLike } from "../../../concurrent.js";
import { returns } from "../../../functions.js";
import type * as Flowable from "../../Flowable.js";
import Flowable_create from "./Flowable.create.js";

const Flowable_fromRunnable: Flowable.Signature["fromRunnable"] =
  <T>() =>
  (runnable: RunnableLike<T>) =>
    Flowable_create<T>(returns(runnable));

export default Flowable_fromRunnable;
