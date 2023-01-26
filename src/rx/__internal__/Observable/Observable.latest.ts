import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import ReadonlyArray$map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { getLength, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$notify from "../Sink/Sink.notify";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";
import Observable$allAreEnumerable from "./Observable.allAreEnumerable";
import Observable$allAreRunnable from "./Observable.allAreRunnable";
import Observable$create from "./Observable.create";

type LatestMode = 1 | 2;
const zipMode = 2;

const Observable$latest = /*@__PURE__*/ (() => {
  const typedObserverMixin = Observer$mixin();
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
        ReadonlyArray$map(observer => observer.latest),
      );
      pipe(instance.delegate, Sink$notify(result));

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
      pipe(instance.delegate, Disposable$dispose());
    }
  };

  type TProperties = {
    ready: boolean;
    latest: unknown;
    readonly ctx: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, Disposable$mixin),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        ctx: LatestCtx,
      ): ObserverLike & TProperties {
        init(Disposable$mixin, instance);
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

      const scheduler = Observer$getScheduler(delegate);

      for (const observable of observables) {
        const innerObserver = pipe(
          createLatestObserver(scheduler, ctx),
          Disposable$addTo(delegate),
          Disposable$onComplete(onCompleteCb),
          Sink$sourceFrom(observable),
        );

        add(ctx, innerObserver);
      }
    };

    const isEnumerable = Observable$allAreEnumerable(observables);
    const isRunnable = Observable$allAreRunnable(observables);

    return Observable$create(onSink, isEnumerable, isRunnable);
  };
})();

export default Observable$latest;
