import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
  SynchronousComputationOf,
} from "../../../computations.js";
import {
  Equality,
  Factory,
  Reducer,
  invoke,
  newInstance,
  pipe,
  returns,
} from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_concat from "./Runnable.concat.js";
import Runnable_distinctUntilChanged from "./Runnable.distinctUntilChanged.js";
import Runnable_fromReadonlyArray from "./Runnable.fromReadonlyArray.js";
import Runnable_scan from "./Runnable.scan.js";

const RunnableModule = {
  concat: Runnable_concat,
  fromReadonlyArray: Runnable_fromReadonlyArray,
};

class GenRunnable<TAction, T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private s: SynchronousComputationOf<Runnable.Computation, TAction>,
    private r: Reducer<TAction, T>,
    private f: Factory<T>,
    private o?: { readonly equality?: Equality<T> },
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>) {
    const { s: src, r: reducer, f: initialState, o: options } = this;

    const acc: T = initialState();

    pipe(
      src,
      Runnable_scan<TAction, T>(reducer, returns(acc)),
      Computation.startWith(RunnableModule)<T>(acc),
      Runnable_distinctUntilChanged<T>(options),
      invoke(RunnableLike_eval, sink),
    );
  }
}

const Runnable_actionReducer: Runnable.Signature["actionReducer"] = (<
    TAction,
    T,
  >(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ) =>
  (runnable: RunnableLike<TAction>) =>
    newInstance(
      GenRunnable,
      runnable,
      reducer,
      initialState,
      options,
    )) as Runnable.Signature["actionReducer"];

export default Runnable_actionReducer;
