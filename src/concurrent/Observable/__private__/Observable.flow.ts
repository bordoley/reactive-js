import { RunnableLike } from "../../../concurrent.js";
import { returns } from "../../../functions.js";
import Flowable_create from "../../Flowable/__private__/Flowable.create.js";
import type * as Observable from "../../Observable.js";

const Observable_flow: Observable.Signature["flow"] =
  <T>() =>
  (runnable: RunnableLike<T>) =>
    Flowable_create<T>(returns(runnable));

export default Observable_flow;
