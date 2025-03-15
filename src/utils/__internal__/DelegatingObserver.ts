import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import {
  DisposableLike_dispose,
  ObserverLike,
} from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../__mixins__/DelegatingQueueableMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
} from "../__mixins__/LiftedObserverMixin.js";

export const create: <T>(o: ObserverLike<T>) => ObserverLike<T> =/*@__PURE__*/ (<T>() => {
  const DelegatingObserverMixin_delegate = Symbol(
    "DelegatingObserverMixin_delegate",
  );
  type TProperties = {
    [DelegatingObserverMixin_delegate]: ObserverLike<T>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingQueueableMixin(), DelegatingSchedulerMixin),
    function DelegatingObserver(
      this: TProperties,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(DelegatingQueueableMixin(), this, delegate);
      init(DelegatingSchedulerMixin, this, delegate);
      this[DelegatingObserverMixin_delegate] = delegate;

      return this;
    },
    props<TProperties>({
      [DelegatingObserverMixin_delegate]: none,
    }),
    proto({
     
    }),
  );
})();

export const createNonDisposing: <T>(o: ObserverLike<T>) => ObserverLike<T> =
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
