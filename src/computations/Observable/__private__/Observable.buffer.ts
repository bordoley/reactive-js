import {
  Array_length,
  Array_push,
  MAX_SAFE_INTEGER,
} from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, none, partial, pipe } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createBufferObserver: <T>(
  delegate: ObserverLike<readonly T[]>,
  count: Optional<number>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const BufferObserver_buffer = Symbol("BufferObserver_buffer");
  const BufferObserver_count = Symbol("BufferingLike_count");

  interface TProperties {
    [BufferObserver_buffer]: T[];
    [BufferObserver_count]: number;
  }

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function BufferObserver(
      this: Pick<
        LiftedObserverLike<T, readonly T[]>,
        typeof LiftedEventListenerLike_notify | typeof LiftedSinkLike_complete
      > &
        TProperties,
      delegate: ObserverLike<readonly T[]>,
      count?: number,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T, readonly T[]>(), this, delegate, none);

      this[BufferObserver_count] = clampPositiveNonZeroInteger(
        count ?? MAX_SAFE_INTEGER,
      );
      this[BufferObserver_buffer] = [];

      return this;
    },
    props<TProperties>({
      [BufferObserver_buffer]: none,
      [BufferObserver_count]: 0,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties & LiftedObserverLike<T, readonly T[]>,
        next: T,
      ) {
        const buffer = this[BufferObserver_buffer];
        const count = this[BufferObserver_count];

        buffer[Array_push](next);

        const shouldEmit = buffer[Array_length] === count;

        if (shouldEmit) {
          this[BufferObserver_buffer] = [];
          this[LiftedEventListenerLike_notifyDelegate](buffer);
        }
      },
      [LiftedSinkLike_complete](
        this: TProperties & LiftedObserverLike<T, readonly T[]>,
      ) {
        const buffer = this[BufferObserver_buffer];
        this[BufferObserver_buffer] = [];

        if (buffer[Array_length] > 0) {
          this[LiftedEventListenerLike_notifyDelegate](buffer);
        }
        this[LiftedSinkLike_completeDelegate]();
      },
    }),
  );
})();

const Observable_buffer: Observable.Signature["buffer"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    createBufferObserver<T>,
    partial(options?.count),
    Observable_liftPureDeferred,
  );

export default Observable_buffer;
