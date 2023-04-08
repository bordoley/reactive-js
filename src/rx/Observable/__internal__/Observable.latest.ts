import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __LatestCtx_completedCount,
  __LatestCtx_delegate,
  __LatestCtx_mode,
  __LatestCtx_observers,
  __LatestObserver_ctx,
  __LatestObserver_latest,
  __LatestObserver_ready,
} from "../../../__internal__/symbols.js";
import { none, pipe } from "../../../functions.js";
import ReadonlyArray_getLength from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  BufferLike_capacity,
  DisposableLike_dispose,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

type LatestMode = 1 | 2;
const zipMode = 2;

const Observable_latest = /*@__PURE__*/ (() => {
  type LatestCtx = {
    [__LatestCtx_delegate]: ObserverLike<readonly unknown[]>;
    [__LatestCtx_mode]: LatestMode;
    [__LatestCtx_completedCount]: number;
    [__LatestCtx_observers]: TProperties[];
  };

  const add = (instance: LatestCtx, observer: TProperties): void => {
    instance[__LatestCtx_observers].push(observer);
  };

  const onNotify = (instance: LatestCtx) => {
    const { [__LatestCtx_mode]: mode, [__LatestCtx_observers]: observers } =
      instance;

    const isReady = observers.every(x => x[__LatestObserver_ready]);

    if (isReady) {
      const result = pipe(
        observers,
        ReadonlyArray_map(observer => observer[__LatestObserver_latest]),
      );
      instance[__LatestCtx_delegate][ObserverLike_notify](result);

      if (mode === zipMode) {
        for (const sub of observers) {
          sub[__LatestObserver_ready] = false;
          sub[__LatestObserver_latest] = none as any;
        }
      }
    }
  };

  const onCompleted = (instance: LatestCtx) => {
    instance[__LatestCtx_completedCount]++;

    if (
      instance[__LatestCtx_completedCount] ===
      ReadonlyArray_getLength(instance[__LatestCtx_observers])
    ) {
      instance[__LatestCtx_delegate][DisposableLike_dispose]();
    }
  };

  type TProperties = {
    [__LatestObserver_ready]: boolean;
    [__LatestObserver_latest]: unknown;
    readonly [__LatestObserver_ctx]: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    mix(
      include(Observer_mixin()),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        ctx: LatestCtx,
        scheduler: SchedulerLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): ObserverLike & TProperties {
        init(Observer_mixin(), instance, scheduler, config);
        instance[__LatestObserver_ctx] = ctx;

        return instance;
      },
      props<TProperties>({
        [__LatestObserver_ready]: false,
        [__LatestObserver_latest]: none,
        [__LatestObserver_ctx]: none,
      }),
      {
        [ObserverLike_notify](this: TProperties & ObserverLike, next: unknown) {
          Observer_assertState(this);

          const { [__LatestObserver_ctx]: ctx } = this;
          this[__LatestObserver_latest] = next;
          this[__LatestObserver_ready] = true;

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
        [__LatestCtx_completedCount]: 0,
        [__LatestCtx_observers]: [],
        [__LatestCtx_delegate]: delegate,
        [__LatestCtx_mode]: mode,
      };

      for (const observable of observables) {
        const innerObserver = pipe(
          createLatestObserver(ctx, delegate, delegate),
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

    return Observable_createWithConfig(onSubscribe, {
      [ObservableLike_isEnumerable]: isEnumerable,
      [ObservableLike_isRunnable]: isRunnable,
    });
  };
})();

export default Observable_latest;
