import { Writable } from "stream";
import {
  DisposableValueLike,
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  dispose,
} from "../disposable";
import { Factory, defer, pipe } from "../functions";
import { IOEvent, IOSinkLike } from "../io";
import {
  ObservableLike,
  createObservable,
  dispatchTo,
  subscribe,
  using,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import { createStreamable } from "../streamable";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

const createWritableEventsObservable = (
  writable: DisposableValueLike<Writable>,
) =>
  createObservable(dispatcher => {
    const writableValue = writable.value;

    const onDrain = defer("resume", dispatchTo(dispatcher));
    writableValue.on("drain", onDrain);

    const onFinish = defer(dispatcher, dispose());
    writableValue.on("finish", onFinish);

    const onPause = defer("pause", dispatchTo(dispatcher));
    writableValue.on(NODE_JS_PAUSE_EVENT, onPause);

    addDisposable(writable, dispatcher);
    addTeardown(dispatcher, _ => {
      writableValue.removeListener("drain", onDrain);
      writableValue.removeListener("finish", onFinish);
      writableValue.removeListener(NODE_JS_PAUSE_EVENT, onPause);
    });

    dispatcher.dispatch("resume");
  });

const createWritableAndSetupEventSubscription = (
  factory: Factory<DisposableValueLike<Writable>>,
  events: ObservableLike<IOEvent<Uint8Array>>,
) => (scheduler: SchedulerLike) => {
  const writable = factory();
  const writableValue = writable.value;
  const streamEventsSubscription = pipe(
    events,
    subscribe(scheduler, ev => {
      switch (ev.type) {
        case "notify":
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type Error regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writableValue.write(Buffer.from(ev.data))) {
            // Hack in a custom event here for pause request
            writableValue.emit(NODE_JS_PAUSE_EVENT);
          }
          break;
        case "done":
          writableValue.end();
          break;
      }
    }),
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
