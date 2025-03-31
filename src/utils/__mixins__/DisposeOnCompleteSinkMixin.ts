import {
  Mixin,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

type TReturn<T> = Omit<
  SinkLike<T>,
  keyof DisposableLike | typeof EventListenerLike_notify
>;

type TPrototype<T> = Pick<
  SinkLike<T>,
  typeof SinkLike_complete | typeof SinkLike_isCompleted
>;

const DisposeOnCompleteSinkMixin: <T>() => Mixin<
  TReturn<T>,
  TPrototype<T>,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  return returns(
    mix<TReturn<T>, unknown, TPrototype<T>, DisposableLike>(
      function DisposeOnCompleteSinkMixin(
        this: DisposableLike & TPrototype<T>,
      ): TReturn<T> {
        return this;
      },
      props({}),
      proto<TPrototype<T>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<DisposableLike>(this);
          return this[DisposableLike_isDisposed];
        },

        [SinkLike_complete](this: DisposableLike) {
          this[DisposableLike_dispose]();
        },
      }),
    ),
  );
})();

export default DisposeOnCompleteSinkMixin;
