import type * as EventSource from "../../EventSource.js";
import Sink_bufferMixin from "../../Sink/__internal__/Sink.bufferMixin.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Optional, error, none, partial, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  SinkLike_notify,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_buffer: EventSource.Signature["buffer"] =
  /*@__PURE__*/ (() => {
    const createBufferEventListener: <T>(
      delegate: EventListenerLike<readonly T[]>,
      count: number,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Sink_bufferMixin()),
          function BufferEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<readonly T[]>,
            count: number,
          ): EventListenerLike<T> {
            const onComplete = (buffer: readonly T[]) => {
              let err: Optional<Error> = none;
              try {
                delegate[SinkLike_notify](buffer);
              } catch (e) {
                err = error(e);
              }
              delegate[DisposableLike_dispose](err);
            };
            init(Sink_bufferMixin<T>(), instance, delegate, count, onComplete);

            return instance;
          },
          props({}),
          {
            [EventListenerLike_isErrorSafe]: false,
          },
        ),
      ))();

    return (count: number) =>
      pipe(
        createBufferEventListener,
        partial(clampPositiveNonZeroInteger(count)),
        EventSource_lift,
      );
  })();

export default EventSource_buffer;
