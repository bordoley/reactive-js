import { Writable } from "stream";
import { dispatch, dispatchTo } from "../dispatcher";
import { dispose, onComplete } from "../disposable";
import {
  FlowMode,
  FlowableSinkLike,
  FlowableSinkStreamLike,
} from "../flowable";
import { Factory, pipe, pipeLazy } from "../functions";
import {
  ObservableLike,
  createObservable,
  onNotify,
  subscribe,
} from "../observable";
import { Observer, getScheduler } from "../observer";
import { SchedulerLike } from "../scheduler";
import { createStream } from "../stream";
import { createLiftedStreamable } from "../streamable";
import { addDisposable, addToDisposable, addToNodeStream } from "./nodeStream";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

const setUp = (
  events: ObservableLike<Uint8Array>,
  writable: Writable,
  observer: Observer<FlowMode>,
): void => {
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
    subscribe(getScheduler(observer)),
    addToNodeStream(writable),
    onComplete(() => {
      writable.end();
    }),
  );

  const { dispatcher } = observer;

  const onDrain = pipeLazy("resume", dispatchTo(dispatcher));
  const onFinish = pipeLazy(dispatcher, dispose());
  const onPause = pipeLazy("pause", dispatchTo(dispatcher));

  writable.on("drain", onDrain);
  writable.on("finish", onFinish);
  writable.on(NODE_JS_PAUSE_EVENT, onPause);

  pipe(dispatcher, dispatch("resume"));
};

export const createWritableSinkStream = (
  writable: Writable,
  streamScheduler: SchedulerLike,
): FlowableSinkStreamLike<Uint8Array> =>
  createStream(
    events =>
      createObservable(observer => {
        setUp(events, writable, observer);
      }),
    streamScheduler,
  );

export const createWritableSink = (
  factory: Factory<Writable>,
): FlowableSinkLike<Uint8Array> =>
  createLiftedStreamable(events =>
    createObservable(observer => {
      const { dispatcher } = observer;

      const writable = pipe(
        factory(),
        addToDisposable(observer),
        addDisposable(dispatcher),
      );

      setUp(events, writable, observer);
    }),
  );
