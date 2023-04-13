import {
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../../__internal__/containers.js";
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
import { Keep } from "../../../containers.js";
import {
  Predicate,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_keep: Keep<EventSourceLike>["keep"] =
  /*@__PURE__*/ (() => {
    const createKeepEventListener: <T>(
      delegate: EventListenerLike<T>,
      predicate: Predicate<T>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, Delegating_mixin()),
          function KeepEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_notify
            > &
              PredicatedLike<T>,
            delegate: EventListenerLike<T>,
            predicate: Predicate<T>,
          ): EventListenerLike<T> {
            init(Delegating_mixin(), instance, delegate);
            init(Disposable_delegatingMixin, instance, delegate);
            instance[PredicatedLike_predicate] = predicate;

            return instance;
          },
          props<PredicatedLike<T>>({
            [PredicatedLike_predicate]: none,
          }),
          {
            [EventListenerLike_notify](
              this: PredicatedLike<T> &
                DelegatingLike<EventListenerLike<T>> &
                EventListenerLike<T>,
              next: T,
            ) {
              if (this[PredicatedLike_predicate](next)) {
                this[DelegatingLike_delegate][EventListenerLike_notify](next);
              }
            },
          },
        ),
      ))();

    return <T>(predicate: Predicate<T>) =>
      pipe(createKeepEventListener, partial(predicate), EventSource_lift);
  })() as Keep<EventSourceLike>["keep"];


export default EventSource_keep;
