import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  DeferredEventSourceLike,
  EventSourceLike_subscribe,
} from "../../computations.js";
import { SideEffect1, error, none, returns } from "../../functions.js";
import { ConsumerLike, DisposableLike_dispose } from "../../utils.js";

type TReturn<T, TConsumer extends ConsumerLike<T>> = Pick<
  DeferredEventSourceLike<T, TConsumer>,
  typeof EventSourceLike_subscribe | typeof ComputationLike_isDeferred
>;

const DeferredEventSourceCreateMixin: <
  T,
  TConsumer extends ConsumerLike<T>,
>() => Mixin1<TReturn<T, TConsumer>, SideEffect1<TConsumer>> = /*@__PURE__*/ (<
  T,
  TConsumer extends ConsumerLike<T>,
>() => {
  const EventSourceCreateMixin_effect = Symbol("EventSourceCreateMixin_effect");
  type TProperties = {
    [EventSourceCreateMixin_effect]: SideEffect1<TConsumer>;
  };

  type TPrototype = Pick<
    DeferredEventSourceLike<T, TConsumer>,
    typeof EventSourceLike_subscribe | typeof ComputationLike_isDeferred
  >;

  return returns(
    mix(
      function EventSourceCreateMixin(
        this: TProperties & TPrototype,
        effect: SideEffect1<TConsumer>,
      ): TReturn<T, TConsumer> {
        this[EventSourceCreateMixin_effect] = effect;
        return this;
      },
      props<TProperties>({
        [EventSourceCreateMixin_effect]: none,
      }),
      proto<TPrototype>({
        [ComputationLike_isDeferred]: true as const,

        [EventSourceLike_subscribe](this: TProperties, listener: TConsumer) {
          try {
            this[EventSourceCreateMixin_effect](listener);
          } catch (e) {
            listener[DisposableLike_dispose](error(e));
          }
        },
      }),
    ),
  );
})();

export default DeferredEventSourceCreateMixin;
