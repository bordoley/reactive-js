import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { SideEffect1, none } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ListenerLike,
  ListenerLike_notify,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

export const create: <T>(
  notify: (this: ListenerLike<T>, a: T) => void,
) => ListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [ListenerLike_notify]: SideEffect1<T>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function Sink(
      this: TProperties & Omit<ListenerLike<T>, keyof DisposableLike>,
      notify: (this: ListenerLike<T>, a: T) => void,
    ): ListenerLike<T> {
      init(DisposableMixin, this);

      this[ListenerLike_notify] = notify;

      return this;
    },
    props<TProperties>({
      [ListenerLike_notify]: none,
    }),
    proto({
      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },
      [SinkLike_complete](this: DisposableLike) {
        this[DisposableLike_dispose]();
      },
    }),
  );
})();
