import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingObserverMixin from "../__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, DelegatingObserverMixin()),
    function NonDisposingDelegatingObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DelegatingObserverMixin(), this, delegate);

      return this;
    },
    props(),
    proto({
      get [SinkLike_isCompleted]() {
        unsafeCast<ObserverLike<T>>(this);
        return this[DisposableLike_isDisposed];
      },

      [SinkLike_complete](this: ObserverLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();
