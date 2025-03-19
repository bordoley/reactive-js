import { SynchronousComputationOf } from "../../../computations.js";
import { Factory, Reducer, compose, identity } from "../../../functions.js";
import * as Observable from "../../Observable.js";
import Observable_actionReducer from "./Observable.actionReducer.js";
import Observable_last from "./Observable.last.js";

const Observable_reduce: Observable.Signature["reduce"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options: {
    readonly maxMicroTaskTicks?: number;
  },
) =>
  compose(
    identity<SynchronousComputationOf<Observable.Computation, T>>,
    Observable_actionReducer<T, TAcc>(reducer, initialValue),
    Observable_last<TAcc>(options),
  )) as Observable.Signature["reduce"];

export default Observable_reduce;
