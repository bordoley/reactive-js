import {
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { Factory, error, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import {
  DisposableLike_dispose,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class GenRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(
    private readonly f: Factory<Iterator<T>>,
    config?: {
      [ComputationLike_isPure]?: boolean;
    },
  ) {
    this[ComputationLike_isPure] = Computation.isPure(config ?? {});
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const enumerator = pipe(
      this.f(),
      Iterator.toEnumerator(),
      Disposable.addTo(sink),
    );

    let isCompleted = sink[SinkLike_isCompleted];

    try {
      while (!isCompleted && enumerator[EnumeratorLike_moveNext]()) {
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
