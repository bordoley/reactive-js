import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { ForEach } from "../../../containers.js";
import { SideEffect1, none, partial, pipe } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventSourceLike,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_forEach: ForEach<EventSourceLike>["forEach"] =
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
            > & { ef: SideEffect1<T> },
            delegate: EventListenerLike<T>,
            effect: SideEffect1<T>,
          ): EventListenerLike<T> {
            init(Delegating_mixin(), instance, delegate);
            init(Disposable_delegatingMixin, instance, delegate);
            instance.ef = effect;

            return instance;
          },
          props<{ ef: SideEffect1<T> }>({
            ef: none,
          }),
          {
            [EventListenerLike_isErrorSafe]: false,

            [EventListenerLike_notify](
              this: { ef: SideEffect1<T> } & DelegatingLike<
                EventListenerLike<T>
              > &
                EventListenerLike<T>,
              next: T,
            ) {
              this.ef(next);
              this[DelegatingLike_delegate][EventListenerLike_notify](next);
            },
          },
        ),
      ))();

    return <T>(effect: SideEffect1<T>) =>
      pipe(createForEachEventListener, partial(effect), EventSource_lift);
  })() as ForEach<EventSourceLike>["forEach"];

export default EventSource_forEach;
