import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import { getLength, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import { getScheduler } from "../../ObserverLike";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__notify from "../SinkLike/SinkLike.notify";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";
import ObservableLike__allAreEnumerable from "./ObservableLike.allAreEnumerable";
import ObservableLike__allAreRunnable from "./ObservableLike.allAreRunnable";
import ObservableLike__create from "./ObservableLike.create";

type LatestMode = 1 | 2;
const zipMode = 2;

const ObservableLike__latest = /*@__PURE__*/ (() => {
  const typedObserverMixin = ObserverLike__mixin();
  type LatestCtx = {
    delegate: ObserverLike<readonly unknown[]>;
    mode: LatestMode;
    completedCount: number;
    observers: TProperties[];
  };

  const add = (instance: LatestCtx, observer: TProperties): void => {
    instance.observers.push(observer);
  };

  const onNotify = (instance: LatestCtx) => {
    const { mode, observers } = instance;

    const isReady = observers.every(x => x.ready);

    if (isReady) {
      const result = pipe(
        observers,
        ReadonlyArrayLike__map(observer => observer.latest),
      );
      pipe(instance.delegate, SinkLike__notify(result));

      if (mode === zipMode) {
        for (const sub of observers) {
          sub.ready = false;
          sub.latest = none as any;
        }
      }
    }
  };

  const onCompleted = (instance: LatestCtx) => {
    instance.completedCount++;

    if (instance.completedCount === getLength(instance.observers)) {
      pipe(instance.delegate, DisposableLike__dispose());
    }
  };

  type TProperties = {
    ready: boolean;
    latest: unknown;
    readonly ctx: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, DisposableLike__mixin),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        ctx: LatestCtx,
      ): ObserverLike & TProperties {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, scheduler);

        instance.ctx = ctx;

        return instance;
      },
      props<TProperties>({
        ready: false,
        latest: none,
        ctx: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: unknown) {
          const { ctx } = this;
          this.latest = next;
          this.ready = true;

          onNotify(ctx);
        },
      },
    ),
  );

  return (
    observables: readonly ObservableLike<any>[],
    mode: LatestMode,
  ): ObservableLike<readonly unknown[]> => {
    const onSink = (delegate: ObserverLike<readonly unknown[]>) => {
      const ctx: LatestCtx = {
        completedCount: 0,
        observers: [],
        delegate,
        mode,
      };

      const onCompleteCb = () => {
        onCompleted(ctx);
      };

      const scheduler = getScheduler(delegate);

      for (const observable of observables) {
        const innerObserver = pipe(
          createLatestObserver(scheduler, ctx),
          DisposableLike__addTo(delegate),
          DisposableLike__onComplete(onCompleteCb),
          SinkLike__sourceFrom(observable),
        );

        add(ctx, innerObserver);
      }
    };

    const isEnumerable = ObservableLike__allAreEnumerable(observables);
    const isRunnable = ObservableLike__allAreRunnable(observables);

    return ObservableLike__create(onSink, isEnumerable, isRunnable);
  };
})();

export default ObservableLike__latest;
