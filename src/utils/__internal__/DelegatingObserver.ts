import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_complete,
} from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../__mixins__/DelegatingQueueableMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

export const create: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    return mixInstanceFactory(
      include(
        DelegatingDisposableMixin,
        DelegatingQueueableMixin(),
        DelegatingSchedulerMixin,
      ),
      function DelegatingObserver(
        this: unknown,
        delegate: ObserverLike<T>,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingQueueableMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);

        return this;
      },
    );
  })();

export const createNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DisposableMixin,
      DelegatingQueueableMixin(),
      DelegatingSchedulerMixin,
    ),
    function NonDisposingDelegatingObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DelegatingQueueableMixin(), this, delegate);
      init(DelegatingSchedulerMixin, this, delegate);

      return this;
    },
    props(),
    proto({
      [SinkLike_complete](this: ObserverLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();
