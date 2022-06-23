import { Writable } from "stream";
import {
  DisposableValueLike,
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
} from "../disposable";
import { Factory, defer, pipe } from "../functions";
import { createObservableUnsafe, dispatchTo, subscribe } from "../observable";
import { toDispatcher } from "../observable/toDispatcher";

import { FlowableSinkLike, createStreamable } from "../streamable";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

export const createWritableIOSink = (
  factory: Factory<DisposableValueLike<Writable>>,
): FlowableSinkLike<Uint8Array> =>
  createStreamable(events =>
    createObservableUnsafe(observer => {
      const dispatcher = toDispatcher(observer);

      const writable = factory();
      const writableValue = writable.value;

      const streamEventsSubscription = pipe(
        events,
        subscribe(observer, ev => {
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type Error regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writableValue.write(Buffer.from(ev))) {
            // Hack in a custom event here for pause request
            writableValue.emit(NODE_JS_PAUSE_EVENT);
          }
        }),
      );
      addOnDisposedWithoutErrorTeardown(streamEventsSubscription, () => {
        writableValue.end();
      });

      addDisposableDisposeParentOnChildError(
        writable,
        streamEventsSubscription,
      );
      addDisposable(observer, writable);

      const onDrain = defer("resume", dispatchTo(dispatcher));
      const onFinish = defer(dispatcher, dispose());
      const onPause = defer("pause", dispatchTo(dispatcher));

      writableValue.on("drain", onDrain);
      writableValue.on("finish", onFinish);
      writableValue.on(NODE_JS_PAUSE_EVENT, onPause);

      addDisposable(writable, dispatcher);
      addTeardown(dispatcher, _ => {
        writableValue.removeListener("drain", onDrain);
        writableValue.removeListener("finish", onFinish);
        writableValue.removeListener(NODE_JS_PAUSE_EVENT, onPause);
      });

      dispatcher.dispatch("resume");
    }),
  );
