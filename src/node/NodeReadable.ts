import { Readable } from "stream";
import * as EventSource from "../computations/EventSource.js";
import * as PauseableEventSource from "../computations/PauseableEventSource.js";
import {
  PauseableBroadcasterLike,
  PauseableEventSourceLike,
  ProducerLike,
} from "../computations.js";
import { bindMethod, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
} from "../utils.js";
import * as NodeStream from "./NodeStream.js";

interface NodeReadable {
  broadcast(
    readable: Readable,
  ): PauseableBroadcasterLike<Uint8Array> & DisposableLike;

  toEventSource(
    readable: Readable,
  ): PauseableEventSourceLike<Uint8Array> & DisposableLike;

  toProducer(readable: Readable): ProducerLike<Uint8Array> & DisposableLike;
}

type Signature = NodeReadable;

export const broadcast: Signature["broadcast"] = null as any;

export const toPauseableEventSource: Signature["toPauseableEventSource"] =
  readable =>
    PauseableEventSource.create(mode =>
      pipe(
        EventSource.create<Uint8Array>(listener => {
          pipe(readable, NodeStream.addTo(listener), NodeStream.add(listener));

          readable.pause();

          pipe(
            mode,
            EventSource.addEventHandler(isPaused => {
              if (isPaused) {
                readable.pause();
              } else {
                readable.resume();
              }
            }),
            NodeStream.addToNodeStream(readable),
          );

          const onData = bindMethod(listener, EventListenerLike_notify);
          const onEnd = bindMethod(listener, DisposableLike_dispose);

          readable.on("data", onData);
          readable.on("end", onEnd);
        }),
        Disposable.bindTo(mode),
      ),
    );

export const toProducer: Signature["broadcast"] = null as any;
