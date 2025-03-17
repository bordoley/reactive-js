import { Readable } from "stream";
import * as Producer from "../computations/Producer.js";
import {
  PauseableEventSourceLike,
  ProducerWithSideEffectsLike,
} from "../computations.js";
import { bindMethod, compose, pipe } from "../functions.js";
import {
  ConsumerLike_addOnReadyListener,
  ConsumerLike_isReady,
  DisposableLike,
  EventListenerLike_notify,
  SinkLike_complete,
} from "../utils.js";
import * as NodeStream from "./NodeStream.js";

interface NodeReadable {
  toEventSource(
    readable: Readable,
  ): PauseableEventSourceLike<Uint8Array> & DisposableLike;

  toProducer(readable: Readable): ProducerWithSideEffectsLike<Uint8Array>;
}

type Signature = NodeReadable;

export const toProducer: Signature["toProducer"] = readable =>
  Producer.create(consumer => {
    pipe(readable, NodeStream.addTo(consumer), NodeStream.add(consumer));

    readable.pause();

    consumer[ConsumerLike_addOnReadyListener](bindMethod(readable, "resume"));

    const onData = (data: Uint8Array) => {
      consumer[EventListenerLike_notify](data);

      if (!consumer[ConsumerLike_isReady]) {
        readable.pause();
      }
    };
    readable.on("data", onData);

    readable.on("end", bindMethod(consumer, SinkLike_complete));

    if (consumer[ConsumerLike_isReady]) {
      readable.resume();
    }
  });

export const toEventSource: Signature["toEventSource"] = /*@__PURE__*/ (() =>
  compose(toProducer, Producer.toEventSource()))();
