import { IterableLike } from "../../../computations.js";
import { bindMethod, returns } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Iterable from "../../Iterable.js";
import {
  Observable_gen,
  Observable_genPure,
} from "../../Observable/__private__/Observable.gen.js";

const Iterable_toObservable: Iterable.Signature["toObservable"] =
  /*@__PURE__*/ returns((iter: IterableLike) => {
    const gen = Computation.isPure(iter) ? Observable_genPure : Observable_gen;
    return gen(bindMethod(iter, Symbol.iterator));
  }) as Iterable.Signature["toObservable"];

export default Iterable_toObservable;
