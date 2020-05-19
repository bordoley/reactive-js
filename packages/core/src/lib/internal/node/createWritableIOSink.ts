import { Writable } from "stream";
import {
  DisposableValueLike,
  dispose,
  addTeardown,
  addDisposable,
  addDisposableDisposeParentOnChildError,
} from "../../disposable";
import { FlowMode } from "../../flowable";
import { pipe, Factory, defer } from "../../functions";
import { IOEventType, IOEvent, IOSinkLike } from "../../io";
import {
  createObservable,
  onNotify,
  subscribe,
  ObservableLike,
  using,
  dispatch,
  dispatchTo,
} from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { createStreamable } from "../../streamable";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

const createWritableEventsObservable = (
  writable: DisposableValueLike<Writable>,
) =>
  createObservable(dispatcher => {
    const writableValue = writable.value;

    const onDrain = defer(FlowMode.Resume, dispatchTo(dispatcher));
    writableValue.on("drain", onDrain);

    const onFinish = defer(dispatcher, dispose);
    writableValue.on("finish", onFinish);

    const onPause = defer(FlowMode.Pause, dispatchTo(dispatcher));
    writableValue.on(NODE_JS_PAUSE_EVENT, onPause);

    addDisposable(writable, dispatcher);
    addTeardown(dispatcher, _ => {
      writableValue.removeListener("drain", onDrain);
      writableValue.removeListener("finish", onFinish);
      writableValue.removeListener(NODE_JS_PAUSE_EVENT, onPause);
    });

    dispatch(dispatcher, FlowMode.Resume);
  });

const createWritableAndSetupEventSubscription = (
  factory: Factory<DisposableValueLike<Writable>>,
  events: ObservableLike<IOEvent<Uint8Array>>,
) => (scheduler: SchedulerLike) => {
  const writable = factory();
  const writableValue = writable.value;
  const streamEventsSubscription = pipe(
    events,
    onNotify(ev => {
      switch (ev.type) {
        case IOEventType.Next:
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type exception regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writableValue.write(Buffer.from(ev.data))) {
            // Hack in a custom event here for pause request
            writableValue.emit(NODE_JS_PAUSE_EVENT);
          }
          break;
        case IOEventType.Done:
          writableValue.end();
          break;
      }
    }),
    subscribe(scheduler),
  );

  addDisposableDisposeParentOnChildError(writable, streamEventsSubscription);

  return writable;
};

export const createWritableIOSink = (
  factory: Factory<DisposableValueLike<Writable>>,
): IOSinkLike<Uint8Array> =>
  createStreamable(events =>
    using(
      createWritableAndSetupEventSubscription(factory, events),
      createWritableEventsObservable,
    ),
  );
