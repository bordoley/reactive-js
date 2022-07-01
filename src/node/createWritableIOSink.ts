import { Writable } from "stream";
import { dispatch, dispatchTo } from "../dispatcher";
import {
  DisposableValueLike,
  add,
  addTo,
  dispose,
  onComplete,
} from "../disposable";
import { FlowableSinkLike } from "../flowable";
import { Factory, pipe, pipeLazy } from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { scheduler } from "../observer";
import { createLiftedStreamable } from "../streamable";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

export const createWritableIOSink = (
  factory: Factory<DisposableValueLike<Writable>>,
): FlowableSinkLike<Uint8Array> =>
  createLiftedStreamable(events =>
    createObservable(observer => {
      const { dispatcher } = observer;

      const writable = pipe(factory(), addTo(observer), add(dispatcher, true));
      const writableValue = writable.value;

      pipe(
        events,
        onNotify(ev => {
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type Error regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writableValue.write(Buffer.from(ev))) {
            // Hack in a custom event here for pause request
            writableValue.emit(NODE_JS_PAUSE_EVENT);
          }
        }),
        subscribe(scheduler(observer)),
        addTo(observer),
        onComplete(() => {
          writableValue.end();
        }),
      );

      const onDrain = pipeLazy("resume", dispatchTo(dispatcher));
      const onFinish = pipeLazy(dispatcher, dispose());
      const onPause = pipeLazy("pause", dispatchTo(dispatcher));

      writableValue.on("drain", onDrain);
      writableValue.on("finish", onFinish);
      writableValue.on(NODE_JS_PAUSE_EVENT, onPause);

      pipe(dispatcher, dispatch("resume"));
    }),
  );
