import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  LatestCtx_completedCount,
  LatestCtx_delegate,
  LatestCtx_mode,
  LatestCtx_observers,
  LatestObserver_ctx,
  LatestObserver_latest,
  LatestObserver_ready,
} from "../../../__internal__/symbols.js";
import { none, pipe } from "../../../functions.js";
import ReadonlyArray_getLength from "../../../keyedcontainers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_map from "../../../keyedcontainers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  DisposableLike_dispose,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  BufferLike_capacity,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";

type LatestMode = 1 | 2;
const zipMode = 2;

const Observable_latest = /*@__PURE__*/ (() => {
  const typedObserverMixin = Observer_mixin();

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
      instance[LatestCtx_delegate][ObserverLike_notify](result);

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
      ReadonlyArray_getLength(instance[LatestCtx_observers])
    ) {
      instance[LatestCtx_delegate][DisposableLike_dispose]();
    }
  };

  type TProperties = {
    [LatestObserver_ready]: boolean;
    [LatestObserver_latest]: unknown;
    readonly [LatestObserver_ctx]: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, Disposable_mixin),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        ctx: LatestCtx,
        scheduler: SchedulerLike,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): ObserverLike & TProperties {
        init(Disposable_mixin, instance);
        init(
          typedObserverMixin,
          instance,
          scheduler,
          capacity,
          backpressureStrategy,
        );

        instance[LatestObserver_ctx] = ctx;

        return instance;
      },
      props<TProperties>({
        [LatestObserver_ready]: false,
        [LatestObserver_latest]: none,
        [LatestObserver_ctx]: none,
      }),
      {
        [ObserverLike_notify](this: TProperties & ObserverLike, next: unknown) {
          Observer_assertState(this);

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
    const onSubscribe = (delegate: ObserverLike<readonly unknown[]>) => {
      const ctx: LatestCtx = {
        [LatestCtx_completedCount]: 0,
        [LatestCtx_observers]: [],
        [LatestCtx_delegate]: delegate,
        [LatestCtx_mode]: mode,
      };

      for (const observable of observables) {
        const innerObserver = pipe(
          createLatestObserver(
            ctx,
            delegate[DispatcherLike_scheduler],
            delegate[BufferLike_capacity],
            delegate[QueueableLike_backpressureStrategy],
          ),
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            onCompleted(ctx);
          }),
          Observer_sourceFrom(observable),
        );

        add(ctx, innerObserver);
      }
    };

    const isEnumerable = Observable_allAreEnumerable(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return Observable_create(onSubscribe, isEnumerable, isRunnable);
  };
})();

export default Observable_latest;
