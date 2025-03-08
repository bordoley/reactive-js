import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../../computations.js";
import { SideEffect1, error, none } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import * as Publisher from "../../Publisher.js";

const EventSource_create: EventSource.Signature["create"] = /*@__PURE__*/ (<
  T,
>() => {
  const CreateEventSource_delegate = Symbol("CreateEventSource_delegate");

  type TProperties = {
    [CreateEventSource_delegate]: PublisherLike<T>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin),
    function CreateEventSource(
      instance: Pick<
        EventSourceLike<T>,
        | typeof EventSourceLike_addEventListener
        | typeof ComputationLike_isSynchronous
        | typeof ComputationLike_isDeferred
      > &
        TProperties,
      setup: SideEffect1<EventListenerLike<T>>,
    ): EventSourceLike<T> & DisposableLike {
      const delegate = (instance[CreateEventSource_delegate] =
        Publisher.create<T>());

      init(DelegatingDisposableMixin, instance, delegate);

      try {
        setup(delegate);
      } catch (e) {
        delegate[DisposableLike_dispose](error(e));
      }

      return instance;
    },
    props<TProperties>({
      [CreateEventSource_delegate]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      [EventSourceLike_addEventListener](
        this: TProperties,
        listener: EventListenerLike,
      ) {
        this[CreateEventSource_delegate][EventSourceLike_addEventListener](
          listener,
        );
      },
    },
  );
})();

export default EventSource_create;
