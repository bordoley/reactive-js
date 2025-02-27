import {
  Array_every,
  Array_length,
  Array_push,
} from "../../../__internal__/constants.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { ComputationLike_isPure } from "../../../computations.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../concurrent.js";
import { none, pick, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
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

  function onLatestObserverCompleted(this: TProperties) {
    const ctx = this[LatestObserver_ctx];
    ctx[LatestCtx_completedCount]++;

    if (
      ctx[LatestCtx_completedCount] === ctx[LatestCtx_observers][Array_length]
    ) {
      ctx[LatestCtx_delegate][DisposableLike_dispose]();
    }
  }

  const LatestObserver_ctx = Symbol("LatestObserver_ctx");
  const LatestObserver_latest = Symbol("LatestObserver_latest");
  const LatestObserver_ready = Symbol("LatestObserver_ready");

  type TProperties = {
    [LatestObserver_ready]: boolean;
    [LatestObserver_latest]: unknown;
    readonly [LatestObserver_ctx]: LatestCtx;
  };

  const createLatestObserver = mixInstanceFactory(
    include(DisposableMixin, DelegatingObserverMixin()),
    function LatestObserver(
      instance: Pick<ObserverLike, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      ctx: LatestCtx,
      delegate: ObserverLike,
    ): ObserverLike & TProperties {
      init(DisposableMixin, instance);
      init(DelegatingObserverMixin(), instance, delegate);

      instance[LatestObserver_ctx] = ctx;

      pipe(instance, DisposableContainer.onComplete(onLatestObserverCompleted));

      return instance;
    },
    props<TProperties>({
      [LatestObserver_ready]: false,
      [LatestObserver_latest]: none,
      [LatestObserver_ctx]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & ObserverLike,
        next: unknown,
      ) {
        const ctx = this[LatestObserver_ctx];
        const mode = ctx[LatestCtx_mode];
        const observers = ctx[LatestCtx_observers];

        this[LatestObserver_latest] = next;
        this[LatestObserver_ready] = true;

        const isReady = observers[Array_every](pick(LatestObserver_ready));

        if (isReady) {
          const result = pipe(
            observers,
            ReadonlyArray.map(pick(LatestObserver_latest)),
          );
          ctx[LatestCtx_delegate][ObserverLike_notify](result);

          if (mode === zipMode) {
            for (const sub of observers) {
              sub[LatestObserver_ready] = false;
              sub[LatestObserver_latest] = none as any;
            }
          }
        }
      }),
    },
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
        const innerObserver = createLatestObserver(ctx, delegate);

        ctx[LatestCtx_observers][Array_push](innerObserver);
        observable[ObservableLike_observe](innerObserver);
      }
    };

    const isPure = Observable_allArePure(observables);
    const isRunnable = Observable_allAreRunnable(observables);

    return Observable_createWithConfig(onSubscribe, {
      [ObservableLike_isDeferred]: true,
      [ComputationLike_isPure]: isPure,
      [ObservableLike_isRunnable]: isRunnable,
    });
  };
})();

export default Observable_latest;
