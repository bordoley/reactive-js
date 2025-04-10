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
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import {
  DisposableLike_dispose,
  EnumeratorLike_current,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SyncEnumeratorLike_moveNext,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class GenRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly f: Factory<Iterator<T>>,
    config?: {
      [ComputationLike_isPure]?: boolean;
    },
  ) {
    this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const enumerator = pipe(
      this.f(),
      Iterator.toSyncEnumerator(),
      Disposable.addTo(sink),
    );

    let isCompleted = sink[SinkLike_isCompleted];

    try {
      while (!isCompleted && enumerator[SyncEnumeratorLike_moveNext]()) {
        const value = enumerator[EnumeratorLike_current];
        sink[EventListenerLike_notify](value);

        isCompleted = sink[SinkLike_isCompleted];

        if (isCompleted) {
          break;
        }
      }

      // Reassign because these values may change after
      // hopping the micro task queue
      isCompleted = sink[SinkLike_isCompleted];
      if (!isCompleted) {
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
