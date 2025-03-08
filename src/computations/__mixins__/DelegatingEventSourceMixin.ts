import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../computations.js";
import { none, returns } from "../../functions.js";
import { DisposableContainerLike, EventListenerLike } from "../../utils.js";

const DelegatingEventSourceMixin: <T>() => Mixin1<
  Omit<EventSourceLike<T>, keyof DisposableContainerLike>,
  EventSourceLike<T>
> = /*@__PURE__*/ (<T>() => {
  const DelegatingEventSourceMixin_delegate = Symbol(
    "DelegatingEventSourceMixin_delegate",
  );

  type TProperties = {
    [DelegatingEventSourceMixin_delegate]: EventSourceLike<T>;
  };

  return returns(
    mix(
      function DelegatingEventSourceMixin(
        instance: Omit<EventSourceLike<T>, keyof DisposableContainerLike> &
          TProperties,
        delegate: EventSourceLike<T>,
      ): Omit<EventSourceLike<T>, keyof DisposableContainerLike> {
        instance[DelegatingEventSourceMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingEventSourceMixin_delegate]: none,
      }),
      {
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [EventSourceLike_addEventListener](
          this: TProperties,
          listener: EventListenerLike<T>,
        ) {
          this[DelegatingEventSourceMixin_delegate][
            EventSourceLike_addEventListener
          ](listener);
        },
      },
    ),
  );
})();

export default DelegatingEventSourceMixin;
