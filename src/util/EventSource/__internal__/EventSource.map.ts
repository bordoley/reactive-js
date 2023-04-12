import { MappingLike } from "../../../__internal__/containers.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __MappingLike_mapper } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { Map } from "../../../containers.js";
import { Function1, newInstance, none } from "../../../functions.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addListener,
  EventSourceLike_listenerCount,
  IndexedBufferCollectionLike,
  KeyedCollectionLike_get,
  ReplayableLike_buffer,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";

const createMappingEventListener: <TA, TB>(
  delegate: EventListenerLike<TB>,
  mapper: Function1<TA, TB>,
) => EventListenerLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function MapObserver(
        instance: Pick<EventListenerLike<TA>, typeof EventListenerLike_notify> &
          MappingLike<TA, TB>,
        delegate: EventListenerLike<TB>,
        mapper: Function1<TA, TB>,
      ): EventListenerLike<TA> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__MappingLike_mapper] = mapper;

        return instance;
      },
      props<MappingLike<TA, TB>>({
        [__MappingLike_mapper]: none,
      }),
      {
        [EventListenerLike_notify](
          this: MappingLike<TA, TB> &
            DelegatingLike<EventListenerLike<TB>> &
            EventListenerLike<TA>,
          next: TA,
        ) {
          const mapped = this[__MappingLike_mapper](next);
          this[DelegatingLike_delegate][EventListenerLike_notify](mapped);
        },
      },
    ),
  ))();

class MappingEventSource<TA, TB>
  implements EventSourceLike<TB>, IndexedBufferCollectionLike<TB>
{
  constructor(readonly d: EventSourceLike<TA>, readonly m: Function1<TA, TB>) {}

  get [EventSourceLike_listenerCount](): number {
    return this.d[EventSourceLike_listenerCount];
  }

  [EventSourceLike_addListener](listener: EventListenerLike<TB>): void {
    this.d[EventSourceLike_addListener](
      createMappingEventListener(listener, this.m),
    );
  }

  get [ReplayableLike_buffer](): IndexedBufferCollectionLike<TB> {
    return this;
  }

  get [BufferLike_capacity](): number {
    return this.d[ReplayableLike_buffer][BufferLike_capacity];
  }

  get [CollectionLike_count](): number {
    return this.d[ReplayableLike_buffer][CollectionLike_count];
  }

  [KeyedCollectionLike_get](index: number): TB {
    return this.m(
      this.d[ReplayableLike_buffer][KeyedCollectionLike_get](index),
    );
  }
}

const EventSource_map: Map<EventSourceLike>["map"] =
  <TA, TB>(f: Function1<TA, TB>) =>
  (eventSource: EventSourceLike<TA>): EventSourceLike<TB> =>
    newInstance(MappingEventSource, eventSource, f);

export default EventSource_map;
