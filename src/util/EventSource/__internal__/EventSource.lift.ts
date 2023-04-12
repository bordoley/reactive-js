import {
  LiftedLike,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../../__internal__/containers.js";
import {
  Function1,
  bindMethod,
  newInstance,
  pipeUnsafe,
} from "../../../functions.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addListener,
  EventSourceLike_listenerCount,
  IndexedBufferCollectionLike,
  ReplayableLike_buffer,
} from "../../../util.js";
import IndexedBufferCollection_empty from "../../IndexedBufferCollection/__internal__/IndexedBufferCollection.empty.js";

class LiftedEventSource<TIn, TOut>
  implements
    EventSourceLike<TOut>,
    LiftedLike<EventSourceLike<TIn>, EventListenerLike<any>>
{
  readonly [LiftedLike_source]: EventSourceLike<TIn>;
  readonly [LiftedLike_operators]: readonly Function1<
    EventListenerLike<any>,
    EventListenerLike<any>
  >[];

  constructor(
    source: EventSourceLike<TIn>,
    operators: readonly Function1<
      EventListenerLike<any>,
      EventListenerLike<any>
    >[],
  ) {
    this[LiftedLike_source] = source;
    this[LiftedLike_operators] = operators;
  }

  get [EventSourceLike_listenerCount](): number {
    // Kind of a lie, but kind of true
    return this[LiftedLike_source][EventSourceLike_listenerCount];
  }

  get [ReplayableLike_buffer](): IndexedBufferCollectionLike<TOut> {
    // Can only lift when the replay is 0
    return IndexedBufferCollection_empty();
  }

  [EventSourceLike_addListener](listener: EventListenerLike<TOut>) {
    pipeUnsafe(
      listener,
      ...this[LiftedLike_operators],
      bindMethod(this[LiftedLike_source], EventSourceLike_addListener),
    );
  }
}

const EventSource_lift =
  <TA, TB>(
    operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>,
  ): Function1<EventSourceLike<TA>, EventSourceLike<TB>> =>
  (source: EventSourceLike<TA>) => {
    const sourceSource = (source as any)[LiftedLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedLike_operators] ?? []),
    ];

    return newInstance(
      LiftedEventSource,
      sourceSource,
      allFunctions,
    ) as EventSourceLike<TB>;
  };

export default EventSource_lift;
