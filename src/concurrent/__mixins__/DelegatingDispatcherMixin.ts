import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DispatcherLike,
  DispatcherLikeEventMap,
  DispatcherLike_complete,
} from "../../concurrent.js";
import {
  EventListenerLike,
  EventSourceLike_addEventListener,
} from "../../events.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../../utils/__mixins__/DelegatingQueueableMixin.js";

const DelegatingDispatcherMixin: <TReq>() => Mixin1<
  DispatcherLike<TReq>,
  DispatcherLike<TReq>
> = /*@__PURE__*/ (<TReq>() => {
  const DelegatingDispatcherMixin_delegate = Symbol(
    "DelegatingDispatcherMixin_delegate",
  );

  type TProperties = {
    [DelegatingDispatcherMixin_delegate]: DispatcherLike<TReq>;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin(), DelegatingQueueableMixin()),
      function DelegatingDispatcherMixin(
        instance: Pick<
          DispatcherLike,
          | typeof DispatcherLike_complete
          | typeof EventSourceLike_addEventListener
        > &
          TProperties,
        delegate: DispatcherLike<TReq>,
      ): DispatcherLike<TReq> {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(DelegatingQueueableMixin(), instance, delegate);
        instance[DelegatingDispatcherMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingDispatcherMixin_delegate]: none,
      }),
      {
        [DispatcherLike_complete](this: TProperties) {
          this[DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },

        [EventSourceLike_addEventListener](
          this: TProperties,
          listener: EventListenerLike<
            DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
          >,
        ): void {
          this[DelegatingDispatcherMixin_delegate][
            EventSourceLike_addEventListener
          ](listener);
        },
      },
    ),
  );
})();

export default DelegatingDispatcherMixin;
