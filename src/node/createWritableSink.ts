import { Writable } from "stream";
import { dispatch, dispatchTo, getScheduler } from "../dispatcher";
import { dispose, onComplete } from "../disposable";
import { FlowMode } from "../flowable";
import { Factory, pipe, pipeLazy } from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { StreamableLike, createLiftedStreamable } from "../streamable";
import { addDisposable, addToDisposable, addToNodeStream } from "./nodeStream";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

export const createWritableSink = (
  factory: Factory<Writable> | Writable,
): StreamableLike<Uint8Array, FlowMode> =>
  createLiftedStreamable(events =>
    createObservable(observer => {
      const { dispatcher } = observer;

      const writable =
        typeof factory === "function"
          ? pipe(
              factory(),
              addToDisposable(observer),
              addDisposable(dispatcher),
            )
          : pipe(factory, addDisposable(dispatcher));

      pipe(
        events,
        onNotify(ev => {
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type Error regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writable.write(Buffer.from(ev))) {
            // Hack in a custom event here for pause request
            writable.emit(NODE_JS_PAUSE_EVENT);
          }
        }),
        subscribe(getScheduler(dispatcher)),
        addToNodeStream(writable),
        onComplete(() => {
          writable.end();
        }),
      );

      const onDrain = pipeLazy("resume", dispatchTo(dispatcher));
      const onFinish = pipeLazy(dispatcher, dispose());
      const onPause = pipeLazy("pause", dispatchTo(dispatcher));

      writable.on("drain", onDrain);
      writable.on("finish", onFinish);
      writable.on(NODE_JS_PAUSE_EVENT, onPause);

      pipe(dispatcher, dispatch("resume"));
    }),
  );
