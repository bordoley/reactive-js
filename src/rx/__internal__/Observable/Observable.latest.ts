import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import ReadonlyArray_map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { getLength, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable";
import Observable_allAreRunnable from "./Observable.allAreRunnable";
import Observable_create from "./Observable.create";

type LatestMode = 1 | 2;
const zipMode = 2;

const Observable_latest = /*@__PURE__*/ (() => {
  const typedObserverMixin = Observer_mixin();

  const LatestCtx_delegate = Symbol("LatestCtx_delegate");
  const LatestCtx_mode = Symbol("LatestCtx_mode");
  const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
  const LatestCtx_observers = Symbol("LatestCtx_observers");

  type LatestCtx = {
    [LatestCtx_delegate]: ObserverLike<readonly unknown[]>;
    [LatestCtx_mode]: LatestMode;
    [LatestCtx_completedCount]: number;
    [LatestCtx_observers]: TProperties[];
  };

  const add = (instance: LatestCtx, observer: TProperties): void => {
    instance[LatestCtx_observers].push(observer);
  };

  const onNotify = (instance: LatestCtx) => {
    const { [LatestCtx_mode]: mode, [LatestCtx_observers]: observers } =
      instance;

    const isReady = observers.every(x => x[LatestObserver_ready]);

    if (isReady) {
      const result = pipe(
        observers,
        ReadonlyArray_map(observer => observer[LatestObserver_latest]),
      );
      instance[LatestCtx_delegate][SinkLike_notify](result);

      if (mode === zipMode) {
        for (const sub of observers) {
          sub[LatestObserver_ready] = false;
          sub[LatestObserver_latest] = none as any;
        }
      }
    }
  };

  const onCompleted = (instance: LatestCtx) => {
    instance[LatestCtx_completedCount]++;

    if (
      instance[LatestCtx_completedCount] ===
      getLength(instance[LatestCtx_observers])
    ) {
      pipe(instance[LatestCtx_delegate], Disposable_dispose());
    }
  };

  const LatestObserver_ready = Symbol("LatestObserver_ready");
  const LatestObserver_latest = Symbol("LatestObserver_latest");
  const LatestObserver_ctx = Symbol("LatestObserver_ctx");

  type TProperties = {
    [LatestObserver_ready]: boolean;
    [LatestObserver_latest]: unknown;
    readonly [LatestObserver_ctx]: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, Disposable_mixin),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        ctx: LatestCtx,
      ): ObserverLike & TProperties {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, scheduler);

        instance[LatestObserver_ctx] = ctx;

        return instance;
      },
      props<TProperties>({
        [LatestObserver_ready]: false,
        [LatestObserver_latest]: none,
        [LatestObserver_ctx]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: unknown) {
          const { [LatestObserver_ctx]: ctx } = this;
          this[LatestObserver_latest] = next;
          this[LatestObserver_ready] = true;

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
        [LatestCtx_completedCount]: 0,
        [LatestCtx_observers]: [],
        [LatestCtx_delegate]: delegate,
        [LatestCtx_mode]: mode,
      };

      const onCompleteCb = () => {
        onCompleted(ctx);
      };

      const scheduler = Observer_getScheduler(delegate);

      for (const observable of observables) {
        const innerObserver = pipe(
          createLatestObserver(scheduler, ctx),
          Disposable_addTo(delegate),
          Disposable_onComplete(onCompleteCb),
          Sink_sourceFrom(observable),
        );

        add(ctx, innerObserver);
      }
    };

    const isEnumerable = Observable_allAreEnumerable(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return Observable_create(onSink, isEnumerable, isRunnable);
  };
})();

export default Observable_latest;
