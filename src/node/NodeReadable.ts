import { Readable } from "stream";
import * as Producer from "../computations/Producer.js";
import { ProducerWithSideEffectsLike } from "../computations.js";
import { Factory, bindMethod, pipe } from "../functions.js";
import {
  EventListenerLike_notify,
  QueueableLike_addOnReadyListener,
  QueueableLike_isReady,
  SinkLike_complete,
} from "../utils.js";
import * as NodeStream from "./NodeStream.js";

interface NodeReadable {
  create(factory: Factory<Readable>): ProducerWithSideEffectsLike<Uint8Array>;
}

type Signature = NodeReadable;

export const create: Signature["create"] = factory =>
  Producer.create(consumer => {
    const readable = factory();
    pipe(readable, NodeStream.addTo(consumer), NodeStream.add(consumer));

    readable.pause();

    consumer[QueueableLike_addOnReadyListener](bindMethod(readable, "resume"));

    const onData = (data: Uint8Array) => {
      consumer[EventListenerLike_notify](data);

      if (!consumer[QueueableLike_isReady]) {
        readable.pause();
      }
    };
    readable.on("data", onData);

    readable.on("end", bindMethod(consumer, SinkLike_complete));

    if (consumer[QueueableLike_isReady]) {
      readable.resume();
    }
  });
