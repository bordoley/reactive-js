import { Writable } from "stream";
import {
  DisposableValueLike,
  addChild,
  addToParentAndDisposeOnError,
  dispose,
  onComplete,
} from "../disposable";
import { Factory, defer, pipe } from "../functions";
import { createObservable, dispatchTo, subscribe } from "../observable";

import { FlowableSinkLike, createStreamable } from "../streamable";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

export const createWritableIOSink = (
  factory: Factory<DisposableValueLike<Writable>>,
): FlowableSinkLike<Uint8Array> =>
  createStreamable(events =>
    createObservable(observer => {
      const { dispatcher } = observer;

      const writable = pipe(
        factory(),
        addToParentAndDisposeOnError(observer),
        addChild(dispatcher),
      );
      const writableValue = writable.value;

      pipe(
        events,
        subscribe(observer.scheduler, ev => {
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type Error regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writableValue.write(Buffer.from(ev))) {
            // Hack in a custom event here for pause request
            writableValue.emit(NODE_JS_PAUSE_EVENT);
          }
        }),
        addToParentAndDisposeOnError(observer),
        onComplete(() => {
          writableValue.end();
        }),
      );

      const onDrain = defer("resume", dispatchTo(dispatcher));
      const onFinish = defer(dispatcher, dispose());
      const onPause = defer("pause", dispatchTo(dispatcher));

      writableValue.on("drain", onDrain);
      writableValue.on("finish", onFinish);
      writableValue.on(NODE_JS_PAUSE_EVENT, onPause);

      dispatcher.dispatch("resume");
    }),
  );
