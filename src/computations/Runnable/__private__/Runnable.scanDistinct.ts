import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOf,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import {
  Equality,
  Factory,
  Optional,
  Reducer,
  error,
  invoke,
  newInstance,
  pipe,
  returns,
} from "../../../functions.js";
import { DisposableLike_dispose, SinkLike } from "../../../utils.js";
import Computation_startWith from "../../Computation/__private__/Computation.startWith.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_concat from "./Runnable.concat.js";
import Runnable_distinctUntilChanged from "./Runnable.distinctUntilChanged.js";
import { Runnable_genPure } from "./Runnable.gen.js";
import Runnable_scan from "./Runnable.scan.js";

const m = Computation.makeModule<Runnable.Signature, "concat" | "genPure">({
  concat: Runnable_concat,
  genPure: Runnable_genPure,
});

class ActionReducerRunnable<T, TAcc> implements RunnableLike<TAcc> {
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: ComputationOf<Runnable.Computation, T>,
    private readonly r: Reducer<T, TAcc>,
    private f: Factory<TAcc>,
    private readonly o?: { readonly equality?: Equality<TAcc> },
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<TAcc>): void {
    const { s: src, r: reducer, f: initialValue, o: options } = this;

    try {
      const acc: TAcc = initialValue();

      pipe(
        src,
        Runnable_scan<T, TAcc>(reducer, returns(acc)),
        Computation_startWith(m, acc),
        Runnable_distinctUntilChanged<TAcc>(options),
        invoke(RunnableLike_eval, sink),
      );
    } catch (e) {
      sink[DisposableLike_dispose](error(e));
    }
  }
}

const Runnable_scanDistinct: Runnable.Signature["scanDistinct"] = (<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialState: Factory<TAcc>,
    options?: { readonly equality?: Equality<TAcc> },
  ) =>
  (runnable: RunnableLike<T>) =>
    newInstance(
      ActionReducerRunnable,
      runnable,
      reducer,
      initialState,
      options,
    )) as Runnable.Signature["scanDistinct"];

export default Runnable_scanDistinct;
