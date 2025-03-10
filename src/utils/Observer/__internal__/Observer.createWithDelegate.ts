import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() =>
    mixInstanceFactory(
      include(DisposableMixin, ObserverMixin<T>(), LiftedObserverMixin()),
      function DelegatingObserver(
        this: unknown,
        delegate: ObserverLike<T>,
      ): ObserverLike<T> {
        init(DisposableMixin, this);
        init(ObserverMixin(), this, delegate, delegate);
        init(LiftedObserverMixin(), this, delegate);

        return this;
      },
      props(),
      {
        [ObserverLike_notify](this: LiftedObserverLike<T>, next: T) {
          this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        },
      },
    ))();

export default Observer_createWithDelegate;
