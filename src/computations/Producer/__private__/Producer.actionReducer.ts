import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  DeferredComputationOf,
  SourceLike_subscribe,
} from "../../../computations.js";
import {
  Equality,
  Factory,
  Reducer,
  invoke,
  pipe,
  returns,
} from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";
import Producer_concat from "./Producer.concat.js";
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
  (producer: DeferredComputationOf<Producer.Computation, TAction>) =>
    Source.create<T, ConsumerLike<T>>(
      consumer => {
        const acc: T = initialState();

        pipe(
          producer,
          Producer_scan<TAction, T>(reducer, returns(acc)),
          Computation.startWith(ProducerModule)<T>(acc),
          Producer_distinctUntilChanged<T>(options),
          invoke(SourceLike_subscribe, consumer),
        );
      },
      {
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isPure]: Computation.isPureDeferred(producer),
      },
    )) as Producer.Signature["actionReducer"];

export default Producer_actionReducer;
