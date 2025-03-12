import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, QueueableLike_enqueue } from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../__mixins__/ObserverMixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() =>
    mixInstanceFactory(
      include(DisposableMixin, ObserverMixin<T>(), LiftedObserverMixin()),
      function DelegatingObserver(
        this: ObserverMixinBaseLike<T>,
        delegate: ObserverLike<T>,
      ): ObserverLike<T> {
        init(DisposableMixin, this);
        init(ObserverMixin(), this, delegate, delegate);
        init(LiftedObserverMixin(), this, delegate);

        return this;
      },
      props(),
      {
        [ObserverMixinBaseLike_notify](this: LiftedObserverLike<T>, next: T) {
          const delegate = this[LiftedObserverLike_delegate];

          return (
            delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
            delegate[QueueableLike_enqueue](next)
          );
        },
      },
    ))();

export default Observer_createWithDelegate;
