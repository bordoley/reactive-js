import { returns } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Iterable from "../../Iterable.js";
import Runnable_gen from "../../Runnable/__private__/Runnable.gen.js";
import Runnable_genWithSideEffects from "../../Runnable/__private__/Runnable.genWithSideEffects.js";

const RunnableModule = {
  gen: Runnable_gen,
  genWithSideEffects: Runnable_genWithSideEffects,
};

const Iterable_toRunnable: Iterable.Signature["toRunnable"] =
  /*@__PURE__*/ (() =>
    returns(
      Computation.fromIterable(RunnableModule),
    ))() as Iterable.Signature["toRunnable"];

export default Iterable_toRunnable;
