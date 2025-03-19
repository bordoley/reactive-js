import {
  Iterator_done,
  Iterator_next,
  Iterator_return,
} from "../../../__internal__/constants.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import {
  Factory,
  Optional,
  error,
  newInstance,
  none,
  pipe,
} from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  ListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class GenRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly f: Factory<Iterator<T>>,
    config?: {
      [ComputationLike_isPure]?: boolean;
    },
  ) {
    this[ComputationLike_isPure] = Computation.isPure(config ?? {});
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const iter = this.f();

    pipe(
      sink,
      DisposableContainer.onDisposed(() => iter[Iterator_return]?.(none)),
    );

    let isCompleted = sink[SinkLike_isCompleted];

    try {
      let v: Optional<IteratorResult<T, any>> = none;
      while (
        !isCompleted &&
        ((v = iter[Iterator_next]()), v[Iterator_done] !== true)
      ) {
        sink[ListenerLike_notify](v.value);

        isCompleted = sink[SinkLike_isCompleted];

        if (isCompleted) {
          break;
        }
      }

      // Reassign because these values may change after
      // hopping the micro task queue
      isCompleted = sink[SinkLike_isCompleted];
      if (isCompleted) {
        sink[SinkLike_complete]();
        isCompleted = true;
      }
    } catch (e) {
      sink[DisposableLike_dispose](error(e));
    }
  }
}

export const Runnable_gen: Runnable.Signature["gen"] = (<T>(
  factory: Factory<Iterator<T>>,
) =>
  newInstance(GenRunnable<T>, factory, {
    [ComputationLike_isPure]: false,
  })) as Runnable.Signature["gen"];

export const Runnable_genPure: Runnable.Signature["genPure"] = (<T>(
  factory: Factory<Iterator<T>>,
) =>
  newInstance(GenRunnable<T>, factory, {
    [ComputationLike_isPure]: false,
  })) as Runnable.Signature["genPure"];
