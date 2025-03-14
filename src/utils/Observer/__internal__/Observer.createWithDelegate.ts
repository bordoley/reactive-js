import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_next,
} from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../__mixins__/LiftedObserverMixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() =>
    mixInstanceFactory(
      include(DisposableMixin, LiftedObserverMixin()),
      function DelegatingObserver(
        this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify>,
        delegate: ObserverLike<T>,
      ): ObserverLike<T> {
        init(DisposableMixin, this);
        init(LiftedObserverMixin<T>(), this, delegate, none);

        return this;
      },
      props(),
      proto({
        [LiftedObserverLike_notify](this: LiftedObserverLike<T>, next: T) {
          const delegate = this[LiftedObserverLike_delegate];

          delegate[SinkLike_next](next);
        },
        [LiftedObserverLike_complete](this: LiftedObserverLike<T>) {
          this[DisposableLike_dispose]();
        },
      }),
    ))();

export default Observer_createWithDelegate;
