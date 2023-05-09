import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  MappingLike,
  MappingLike_selector,
} from "../../__internal__/types.js";
import { Containers, EventSourceContainer } from "../../containers.js";
import { Function1, none, partial, pipe } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_map: Containers.TypeClass<EventSourceContainer>["map"] =
  /*@__PURE__*/ (() => {
    const createMapEventListener: <TA, TB>(
      delegate: EventListenerLike<TB>,
      predicate: Function1<TA, TB>,
    ) => EventListenerLike<TA> = (<TA, TB>() =>
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, Delegating_mixin()),
          function MapEventListener(
            instance: Pick<
              EventListenerLike<TA>,
              | typeof EventListenerLike_isErrorSafe
              | typeof EventListenerLike_notify
            > &
              MappingLike<TA, TB>,
            delegate: EventListenerLike<TB>,
            selector: Function1<TA, TB>,
          ): EventListenerLike<TA> {
            init(Delegating_mixin(), instance, delegate);
            init(Disposable_delegatingMixin, instance, delegate);
            instance[MappingLike_selector] = selector;

            return instance;
          },
          props<MappingLike<TA, TB>>({
            [MappingLike_selector]: none,
          }),
          {
            [EventListenerLike_isErrorSafe]: false,

            [EventListenerLike_notify](
              this: MappingLike<TA, TB> &
                DelegatingLike<EventListenerLike<TB>> &
                EventListenerLike<TA>,
              next: TA,
            ) {
              const mapped = this[MappingLike_selector](next);
              this[DelegatingLike_delegate][EventListenerLike_notify](mapped);
            },
          },
        ),
      ))();

    return <TA, TB>(selector: Function1<TA, TB>) =>
      pipe(createMapEventListener, partial(selector), EventSource_lift);
  })() as Containers.TypeClass<EventSourceContainer>["map"];

export default EventSource_map;
