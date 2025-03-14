import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { DisposableLike_dispose, ObserverLike } from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
} from "../../__mixins__/LiftedObserverMixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() =>
    mixInstanceFactory(
      include(DisposableMixin, LiftedObserverMixin()),
      function DelegatingObserver(
        this: unknown,
        delegate: ObserverLike<T>,
      ): ObserverLike<T> {
        init(DisposableMixin, this);
        init(LiftedObserverMixin<T>(), this, delegate, none);

        return this;
      },
      props(),
      proto({
        [LiftedObserverLike_complete](this: LiftedObserverLike<T>) {
          this[DisposableLike_dispose]();
        },
      }),
    ))();

export default Observer_createWithDelegate;
