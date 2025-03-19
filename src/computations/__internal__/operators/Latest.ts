import { Array_every, Array_length } from "../../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { none, pick, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import LiftedListenerMixin, {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  ListenerLike,
  ObserverLike,
  SinkLike,
} from "../../../utils.js";

export type LatestMode = 1 | 2;
export const LatestMode_combine: LatestMode = 1;
export const LatestMode_zip: LatestMode = 2;

export const LatestValue_value = Symbol("LatestValue_value");
export const LatestValue_hasValue = Symbol("LatestValue_hasValue");

export const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
export const LatestCtx_mode = Symbol("LatestCtx_mode");
export const LatestCtx_values = Symbol("LatestCtx_values");

export type LatestCtx = {
  [LatestCtx_mode]: LatestMode;
  [LatestCtx_completedCount]: number;
  [LatestCtx_values]: {
    [LatestValue_hasValue]: boolean;
    [LatestValue_value]: unknown;
  }[];
};

export const LatestLike_ctx = Symbol("LatestLike_ctx");

export interface LatestLike<
  TDelegateListener extends ListenerLike<ReadonlyArray<unknown>> = ListenerLike<
    ReadonlyArray<unknown>
  >,
> extends LiftedListenerLike<
    unknown,
    ReadonlyArray<unknown>,
    TDelegateListener
  > {
  readonly [LatestLike_ctx]: LatestCtx;
  readonly [LatestValue_hasValue]: boolean;
  readonly [LatestValue_value]: unknown;
}

const LatestMixin: () => Mixin1<
  Pick<
    LatestLike,
    | typeof LiftedListenerLike_notify
    | typeof LatestLike_ctx
    | typeof LatestValue_hasValue
    | typeof LatestValue_value
  >,
  LatestCtx
> = /*@__PURE__*/ (() => {
  type TProperties = {
    [LatestValue_hasValue]: boolean;
    [LatestValue_value]: unknown;
    [LatestLike_ctx]: LatestCtx;
  };

  return returns(
    mix(
      function LatestMixin(
        this: Pick<
          LiftedListenerLike<unknown, readonly unknown[]>,
          typeof LiftedListenerLike_notify
        > &
          TProperties,
        ctx: LatestCtx,
      ): Pick<
        LatestLike,
        | typeof LiftedListenerLike_notify
        | typeof LatestLike_ctx
        | typeof LatestValue_hasValue
        | typeof LatestValue_value
      > {
        this[LatestLike_ctx] = ctx;

        return this;
      },
      props<TProperties>({
        [LatestValue_hasValue]: false,
        [LatestValue_value]: none,
        [LatestLike_ctx]: none,
      }),
      proto({
        [LiftedListenerLike_notify](
          this: TProperties & LatestLike,
          next: unknown,
        ) {
          const ctx = this[LatestLike_ctx];
          const mode = ctx[LatestCtx_mode];
          const values = ctx[LatestCtx_values];

          this[LatestValue_value] = next;
          this[LatestValue_hasValue] = true;

          const isReady = values[Array_every](pick(LatestValue_hasValue));

          if (isReady) {
            const value = pipe(
              values,
              ReadonlyArray.map(pick(LatestValue_value)),
            );

            this[LiftedListenerLike_notifyDelegate](value);

            if (mode === LatestMode_zip) {
              for (const sub of values) {
                sub[LatestValue_hasValue] = false;
                sub[LatestValue_value] = none as any;
              }
            }
          }
        },
      }),
    ),
  );
})();

export const createListener: (
  delegate: ListenerLike<ReadonlyArray<unknown>>,
  ctx: LatestCtx,
) => LatestLike = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), LatestMixin()),
    function LatestListern(
      this: unknown,
      delegate: ListenerLike<ReadonlyArray<unknown>>,
      ctx: LatestCtx,
    ): LatestLike {
      init(
        LiftedListenerMixin<unknown, ReadonlyArray<unknown>>(),
        this,
        delegate,
      );
      init(LatestMixin(), this, ctx);

      pipe(
        this,
        DisposableContainer.onComplete(() => {
          ctx[LatestCtx_completedCount]++;

          if (
            ctx[LatestCtx_completedCount] ===
            ctx[LatestCtx_values][Array_length]
          ) {
            this[DisposableLike_dispose]();
          }
        }),
      );

      return this;
    },
  ))();

const LatestSinkMixin: <
  TDelegateListener extends SinkLike<ReadonlyArray<unknown>> = SinkLike<
    ReadonlyArray<unknown>
  >,
>() => Mixin1<
  Pick<
    LiftedSinkLike<unknown, TDelegateListener> & LatestLike<TDelegateListener>,
    | typeof LiftedListenerLike_notify
    | typeof LiftedSinkLike_complete
    | typeof LatestLike_ctx
    | typeof LatestValue_hasValue
    | typeof LatestValue_value
  >,
  LatestCtx
> = /*@__PURE__*/ (<
  TDelegateListener extends SinkLike<ReadonlyArray<unknown>> = SinkLike<
    ReadonlyArray<unknown>
  >,
>() => {
  return returns(
    mix(
      include(LatestMixin()),
      function LatestSink(
        this: Pick<
          LiftedSinkLike<unknown> & LatestLike,
          typeof LiftedSinkLike_complete
        >,
        ctx: LatestCtx,
      ): Pick<
        LiftedSinkLike<unknown, TDelegateListener> &
          LatestLike<TDelegateListener>,
        | typeof LiftedListenerLike_notify
        | typeof LiftedSinkLike_complete
        | typeof LatestLike_ctx
        | typeof LatestValue_hasValue
        | typeof LatestValue_value
      > {
        init(LatestMixin(), this, ctx);

        return this;
      },
      props(),
      proto({
        [LiftedSinkLike_complete](this: LiftedSinkLike<unknown> & LatestLike) {
          const ctx = this[LatestLike_ctx];
          ctx[LatestCtx_completedCount]++;

          if (
            ctx[LatestCtx_completedCount] ===
            ctx[LatestCtx_values][Array_length]
          ) {
            this[LiftedSinkLike_completeDelegate]();
          }
        },
      }),
    ),
  );
})();

export const createSink: (
  delegate: SinkLike<ReadonlyArray<unknown>>,
  ctx: LatestCtx,
) => SinkLike<unknown> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), LatestSinkMixin()),
    function KeepSink(
      this: unknown,
      delegate: SinkLike<T>,
      ctx: LatestCtx,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(LatestSinkMixin(), this, ctx);

      return this;
    },
  ))();

export const createConsumer: (
  delegate: ConsumerLike<ReadonlyArray<unknown>>,
  ctx: LatestCtx,
) => ConsumerLike<unknown> & LatestLike<ConsumerLike<ReadonlyArray<unknown>>> =
  /*@__PURE__*/ (() =>
    mixInstanceFactory(
      include(LiftedConsumerMixin(), LatestSinkMixin()),
      function LatestConsumer(
        this: unknown,
        delegate: ConsumerLike,
        ctx: LatestCtx,
      ): ConsumerLike<unknown> &
        LatestLike<ConsumerLike<ReadonlyArray<unknown>>> {
        init(LiftedConsumerMixin(), this, delegate);
        init(
          LatestSinkMixin<ConsumerLike<ReadonlyArray<unknown>>>(),
          this,
          ctx,
        );

        return this;
      },
    ))();

export const createObserver: (
  delegate: ObserverLike<ReadonlyArray<unknown>>,
  ctx: LatestCtx,
) => ObserverLike<unknown> & LatestLike<ObserverLike<ReadonlyArray<unknown>>> =
  /*@__PURE__*/ (() =>
    mixInstanceFactory(
      include(LiftedObserverMixin(), LatestSinkMixin()),
      function LatestObserver(
        this: unknown,
        delegate: ObserverLike,
        ctx: LatestCtx,
      ): ObserverLike<unknown> &
        LatestLike<ObserverLike<ReadonlyArray<unknown>>> {
        init(LiftedObserverMixin(), this, delegate, none);
        init(
          LatestSinkMixin<ObserverLike<ReadonlyArray<unknown>>>(),
          this,
          ctx,
        );

        return this;
      },
    ))();
