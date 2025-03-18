import { unsafeCast } from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike,
  ProducerLike,
  ProducerLike_consume,
} from "../../../computations.js";
import { bindMethod, isNone, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_isReady,
  EventListenerLike_notify,
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

class ProducerFromEventSource<T> implements ProducerLike<T> {
  public readonly [ComputationLike_isPure] = true;
  public readonly [ComputationLike_isDeferred] = true;
  public readonly [ComputationLike_isSynchronous] = false;

  constructor(private readonly e: EventSourceLike<T>) {}

  [ProducerLike_consume](consumer: ConsumerLike<T>): void {
    const src = this.e;

    if (isNone((src as any)[PauseableLike_pause])) {
      return;
    }

    unsafeCast<PauseableLike>(src);

    src[PauseableLike_pause]();

    consumer[ConsumerLike_addOnReadyListener](
      bindMethod(src, PauseableLike_resume),
    );

    pipe(
      src,
      EventSource_addEventHandler(v => {
        consumer[EventListenerLike_notify](v);

        if (!consumer[ConsumerLike_isReady]) {
          src[PauseableLike_pause]();
        }
      }),
      Disposable.addTo(consumer),
    );

    if (consumer[ConsumerLike_isReady]) {
      src[PauseableLike_resume]();
    }
  }
}

const EventSource_toProducer: EventSource.Signature["toProducer"] =
  <T>() =>
  (pauseable: EventSourceLike<T>) =>
    newInstance(ProducerFromEventSource, pauseable);

export default EventSource_toProducer;
