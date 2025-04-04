import { Array_every } from "../../__internal__/constants.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { isSome, none, pick, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingEventListenerMixin, {
  DelegatingEventListenerLike,
  DelegatingEventListenerLike_delegate,
} from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingNonCompletingNonDisposingMixin from "../../utils/__mixins__/DelegatingNonCompletingNonDisposingMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
  SinkLike_complete,
} from "../../utils.js";

export type LatestEventListenerMode = "combine-latest" | "zip-latest";

export const LatestEventListenerValue_value = Symbol(
  "LatestEventListenerValue_value",
);
export const LatestEventListenerValue_hasValue = Symbol(
  "LatestEventListenerValue_hasValue",
);

export interface LatestEventListenerValue {
  [LatestEventListenerValue_hasValue]: boolean;
  [LatestEventListenerValue_value]: unknown;
  readonly [DisposableLike_isDisposed]: boolean;
}

export const LatestEventListenerContextLike_completedCount = Symbol(
  "LatestEventListenerContextLike_completedCount",
);
export const LatestEventListenerContextLike_mode = Symbol(
  "LatestEventListenerContextLike_mode",
);
export const LatestEventListenerContextLike_values = Symbol(
  "LatestEventListenerContextLike_values",
);

export interface LatestEventListenerContextLike {
  readonly [LatestEventListenerContextLike_mode]: LatestEventListenerMode;
  readonly [LatestEventListenerContextLike_completedCount]: number;
  readonly [LatestEventListenerContextLike_values]: LatestEventListenerValue[];
}

export interface LatestEventListenerLike<T = unknown>
  extends EventListenerLike<T>,
    LatestEventListenerValue {}

const LatestEventListenerMixin: () => Mixin2<
  LatestEventListenerLike,
  EventListenerLike<ReadonlyArray<unknown>>,
  LatestEventListenerContextLike
> = /*@__PURE__*/ (() => {
  const LatestEventListener_context = Symbol("LatestEventListener_context");

  type TProperties = {
    [LatestEventListener_context]: LatestEventListenerContextLike;
    [LatestEventListenerValue_hasValue]: boolean;
    [LatestEventListenerValue_value]: unknown;
  };

  type TPrototype = Pick<
    LatestEventListenerLike,
    typeof EventListenerLike_notify
  >;

  return returns(
    mix(
      include(
        DelegatingEventListenerMixin(),
        DelegatingNonCompletingNonDisposingMixin(),
      ),
      function LatestEventListenerMixin(
        this: TPrototype & TProperties,
        delegate: EventListenerLike<ReadonlyArray<unknown>>,
        context: LatestEventListenerContextLike,
      ): LatestEventListenerLike {
        init(
          DelegatingEventListenerMixin<unknown, ReadonlyArray<unknown>>(),
          this,
          delegate,
        );
        init(DelegatingNonCompletingNonDisposingMixin(), this, delegate);
        pipe(
          this,
          Disposable.addTo(delegate),
          DisposableContainer.onComplete(() => {
            const latestValues = context[LatestEventListenerContextLike_values];
            const shouldComplete = latestValues.every(
              x => x[DisposableLike_isDisposed],
            );

            const canComplete = isSome((delegate as any)[SinkLike_complete]);

            if (shouldComplete && canComplete) {
              (delegate as any)[SinkLike_complete]();
            } else if (shouldComplete) {
              delegate[DisposableLike_dispose]();
            }
          }),
        );

        this[LatestEventListener_context] = context;

        return this;
      },
      props<TProperties>({
        [LatestEventListener_context]: none,
        [LatestEventListenerValue_hasValue]: false,
        [LatestEventListenerValue_value]: none,
      }),
      proto({
        [EventListenerLike_notify](
          this: TProperties &
            EventListenerLike &
            DelegatingEventListenerLike<ReadonlyArray<unknown>>,
          next: unknown,
        ) {
          const ctx = this[LatestEventListener_context];
          const mode = ctx[LatestEventListenerContextLike_mode];
          const values = ctx[LatestEventListenerContextLike_values];
          const delegate = this[DelegatingEventListenerLike_delegate];

          this[LatestEventListenerValue_value] = next;
          this[LatestEventListenerValue_hasValue] = true;

          const isReady = values[Array_every](
            pick(LatestEventListenerValue_hasValue),
          );

          if (!isReady) {
            return;
          }

          const value = pipe(
            values,
            ReadonlyArray.map(pick(LatestEventListenerValue_value)),
          );

          delegate[EventListenerLike_notify](value);
          if (mode === "combine-latest") {
            return;
          }

          for (const sub of values) {
            sub[LatestEventListenerValue_hasValue] = false;
            sub[LatestEventListenerValue_value] = none as any;
          }
        },
      }),
    ),
  );
})();

export default LatestEventListenerMixin;
