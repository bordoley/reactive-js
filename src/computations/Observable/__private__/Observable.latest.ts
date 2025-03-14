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
  proto,
} from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { none, pick, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ObserverLike,
  SinkLike_complete,
  SinkLike_push,
} from "../../../utils.js";
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

  const LatestObserver_ctx = Symbol("LatestObserver_ctx");
  const LatestObserver_latest = Symbol("LatestObserver_latest");
  const LatestObserver_ready = Symbol("LatestObserver_ready");

  type TProperties = {
    [LatestObserver_ready]: boolean;
    [LatestObserver_latest]: unknown;
    readonly [LatestObserver_ctx]: LatestCtx;
  };

  const createLatestObserver = mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function LatestObserver(
      this: Pick<LiftedObserverLike, typeof LiftedObserverLike_notify> &
        Mutable<TProperties>,
      ctx: LatestCtx,
      delegate: ObserverLike,
    ): ObserverLike & TProperties {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin(), this, delegate, none);

      this[LatestObserver_ctx] = ctx;

      return this;
    },
    props<TProperties>({
      [LatestObserver_ready]: false,
      [LatestObserver_latest]: none,
      [LatestObserver_ctx]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
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
          const value = pipe(
            observers,
            ReadonlyArray.map(pick(LatestObserver_latest)),
          );

          ctx[LatestCtx_delegate][SinkLike_push](value);

          if (mode === zipMode) {
            for (const sub of observers) {
              sub[LatestObserver_ready] = false;
              sub[LatestObserver_latest] = none as any;
            }
          }
        }
      },

      [LiftedObserverLike_complete](this: TProperties) {
        const ctx = this[LatestObserver_ctx];
        ctx[LatestCtx_completedCount]++;

        if (
          ctx[LatestCtx_completedCount] ===
          ctx[LatestCtx_observers][Array_length]
        ) {
          ctx[LatestCtx_delegate][SinkLike_complete]();
        }
      },
    }),
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

    const isPure = Computation.areAllPure(observables);
    const isSynchronous = Computation.areAllSynchronous(observables);
    //const isMulticasted = Computation.areAllMulticasted(observables);

    return Observable_createWithConfig(onSubscribe, {
      [ComputationLike_isPure]: isPure,
      [ComputationLike_isSynchronous]: isSynchronous,
    });
  };
})();

export default Observable_latest;
