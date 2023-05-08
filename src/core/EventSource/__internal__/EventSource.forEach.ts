import {
  DelegatingLike,
  DelegatingLike_delegate,
  ForEachLike,
  ForEachLike_effect,
} from "../../../__internal__/core.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  Container,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventSourceContainer,
} from "../../../core.js";
import { SideEffect1, none, partial, pipe } from "../../../functions.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_forEach: Container.ForEach<EventSourceContainer>["forEach"] =
  /*@__PURE__*/ (() => {
    const createForEachEventListener: <T>(
      delegate: EventListenerLike<T>,
      effect: SideEffect1<T>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, Delegating_mixin()),
          function ForEachEventListener(
            instance: Pick<
              EventListenerLike<T>,
              | typeof EventListenerLike_isErrorSafe
              | typeof EventListenerLike_notify
            > &
              ForEachLike<T>,
            delegate: EventListenerLike<T>,
            effect: SideEffect1<T>,
          ): EventListenerLike<T> {
            init(Delegating_mixin(), instance, delegate);
            init(Disposable_delegatingMixin, instance, delegate);
            instance[ForEachLike_effect] = effect;

            return instance;
          },
          props<ForEachLike<T>>({
            [ForEachLike_effect]: none,
          }),
          {
            [EventListenerLike_isErrorSafe]: false,

            [EventListenerLike_notify](
              this: ForEachLike<T> &
                DelegatingLike<EventListenerLike<T>> &
                EventListenerLike<T>,
              next: T,
            ) {
              this[ForEachLike_effect](next);
              this[DelegatingLike_delegate][EventListenerLike_notify](next);
            },
          },
        ),
      ))();

    return <T>(effect: SideEffect1<T>) =>
      pipe(createForEachEventListener, partial(effect), EventSource_lift);
  })() as Container.ForEach<EventSourceContainer>["forEach"];

export default EventSource_forEach;
