import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__private__/Observer.mixin.initFromDelegate.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

type LatestMode = 1 | 2;
const zipMode = 2;

const Observable_latest = /*@__PURE__*/ (() => {
  const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
  const LatestCtx_delegate = Symbol("LatestCtx_delegate");
  const LatestCtx_mode = Symbol("LatestCtx_mode");
  const LatestCtx_observers = Symbol("LatestCtx_observers");

  type LatestCtx = {
    [LatestCtx_delegate]: ObserverLike<readonly unknown[]>;
    [LatestCtx_mode]: LatestMode;
    [LatestCtx_completedCount]: number;
    [LatestCtx_observers]: TProperties[];
  };

  const onCompleted = (instance: LatestCtx) => () => {
    instance[LatestCtx_completedCount]++;

    if (
      instance[LatestCtx_completedCount] ===
      instance[LatestCtx_observers].length
    ) {
      instance[LatestCtx_delegate][DisposableLike_dispose]();
    }
  };

  const LatestObserver_ctx = Symbol("LatestObserver_ctx");
  const LatestObserver_latest = Symbol("LatestObserver_latest");
  const LatestObserver_ready = Symbol("LatestObserver_ready");

  type TProperties = {
    [LatestObserver_ready]: boolean;
    [LatestObserver_latest]: unknown;
    readonly [LatestObserver_ctx]: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    mix(
      include(DisposableMixin, ObserverMixin()),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        ctx: LatestCtx,
        delegate: ObserverLike,
      ): ObserverLike & TProperties {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[LatestObserver_ctx] = ctx;

        return instance;
      },
      props<TProperties>({
        [LatestObserver_ready]: false,
        [LatestObserver_latest]: none,
        [LatestObserver_ctx]: none,
      }),
      {
        [SinkLike_notify](this: TProperties & ObserverLike, next: unknown) {
          Observer_assertState(this);

          const { [LatestObserver_ctx]: ctx } = this;
          this[LatestObserver_latest] = next;
          this[LatestObserver_ready] = true;

          const { [LatestCtx_mode]: mode, [LatestCtx_observers]: observers } =
            ctx;

          const isReady = observers.every(x => x[LatestObserver_ready]);

          if (isReady) {
            const result = pipe(
              observers,
              ReadonlyArray.map(observer => observer[LatestObserver_latest]),
            );
            ctx[LatestCtx_delegate][SinkLike_notify](result);

            if (mode === zipMode) {
              for (const sub of observers) {
                sub[LatestObserver_ready] = false;
                sub[LatestObserver_latest] = none as any;
              }
            }
          }
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
          createLatestObserver(ctx, delegate),
          Disposable.onComplete(onCompleted(ctx)),
        );

        ctx[LatestCtx_observers].push(innerObserver);
        observable[ObservableLike_observe](innerObserver);
      }
    };

    const isDeferred = Observable_allAreDeferred(observables);
    const isPure = Observable_allArePure(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return Observable_createWithConfig(onSubscribe, {
      [ObservableLike_isDeferred]:
        isDeferred || (!isDeferred && !isPure && !isRunnable),
      [ObservableLike_isPure]: isPure,
      [ObservableLike_isRunnable]: isRunnable,
    });
  };
})();

export default Observable_latest;
