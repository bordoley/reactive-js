import { Function1, newInstance, pipeUnsafe } from "../../functions";
import {
  EnumerableObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../rx";
import { sourceFrom } from "../../rx/SinkLike";
import { Lift, TReactive } from "../containers/StatefulContainerLike.internal";

export const lift: Lift<EnumerableObservableLike, TReactive>["lift"] =
  /*@__PURE__*/ (() => {
    class LiftedRunnableObservable<TIn, TOut>
      implements EnumerableObservableLike<TOut>
    {
      readonly [ObservableLike_isEnumerable] = true;
      readonly [ObservableLike_isRunnable] = true;

      constructor(
        readonly source: EnumerableObservableLike<TIn>,
        readonly operators: readonly Function1<
          ObserverLike<any>,
          ObserverLike<any>
        >[],
      ) {}

      [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
        pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
      }
    }

    return <TA, TB>(
        operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
      ): Function1<
        EnumerableObservableLike<TA>,
        EnumerableObservableLike<TB>
      > =>
      source => {
        const sourceSource =
          source instanceof LiftedRunnableObservable ? source.source : source;

        const allFunctions =
          source instanceof LiftedRunnableObservable
            ? [operator, ...source.operators]
            : [operator];

        return newInstance(
          LiftedRunnableObservable,
          sourceSource,
          allFunctions,
        );
      };
  })();
