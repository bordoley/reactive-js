import { ProducerLike, ProducerLike_consume } from "../../../computations.js";
import {
  Equality,
  Factory,
  Reducer,
  invoke,
  pipe,
  returns,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import Producer_concat from "./Producer.concat.js";
import Producer_create, {
  Producer_createPureDeferred,
  Producer_createPureSynchronous,
  Producer_createSynchronousWithSideEffects,
} from "./Producer.create.js";
import Producer_distinctUntilChanged from "./Producer.distinctUntilChanged.js";
import Producer_fromReadonlyArray from "./Producer.fromReadonlyArray.js";
import Producer_scan from "./Producer.scan.js";

const ProducerModule = {
  concat: Producer_concat,
  fromReadonlyArray: Producer_fromReadonlyArray,
};

const Producer_actionReducer: Producer.Signature["actionReducer"] = (<
    TAction,
    T,
  >(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ) =>
  (obs: ProducerLike<TAction>) => {
    const create = Computation.isPureSynchronous(obs)
      ? Producer_createPureSynchronous
      : Computation.isSynchronousWithSideEffects(obs)
        ? Producer_createSynchronousWithSideEffects
        : Computation.isPureDeferred(obs)
          ? Producer_createPureDeferred
          : Producer_create;

    return create<T>(sink => {
      const acc: T = initialState();

      pipe(
        obs,
        Producer_scan<TAction, T>(reducer, returns(acc)),
        Computation.startWith(ProducerModule)<T>(acc),
        Producer_distinctUntilChanged<T>(options),
        invoke(ProducerLike_consume, sink),
      );
    });
  }) as Producer.Signature["actionReducer"];

export default Producer_actionReducer;
