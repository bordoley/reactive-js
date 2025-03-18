import { Equality, Factory, Reducer, compose } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as Producer from "../../Producer.js";
import type * as Streamable from "../../Streamable.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_actionReducer: Streamable.Signature["actionReducer"] = <
  TAction,
  T,
>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  scheduler: SchedulerLike,
  options?: { readonly equality?: Equality<T> },
) =>
  Streamable_create<TAction, T>(
   compose(
    Producer.toObservable<TAction>(),
    Observable.actionReducer<TAction, T>(reducer, initialState, options),
    Observable.toProducer<T>(scheduler)
   )
  );

export default Streamable_actionReducer;
