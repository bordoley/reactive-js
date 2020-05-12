import { Writable } from "stream";
import { DisposableValueLike, dispose, add } from "../../disposable";
import {
  FlowEventType,
  FlowMode,
  FlowEvent,
  FlowableSinkLike,
} from "../../flowable";
import { pipe, bind, Factory } from "../../functions";
import {
  createObservable,
  onNotify,
  subscribe,
  ObservableLike,
  using,
  dispatch,
} from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { createStreamable } from "../../streamable";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

const createWritableEventsObservable = (
  writable: DisposableValueLike<Writable>,
) =>
  createObservable(dispatcher => {
    add(writable, dispatcher);
    const writableValue = writable.value;

    const onDrain = bind(dispatch, dispatcher, FlowMode.Resume);
    writableValue.on("drain", onDrain);

    const onFinish = bind(dispose, dispatcher);
    writableValue.on("finish", onFinish);

    const onPause = bind(dispatch, dispatcher, FlowMode.Pause);
    writableValue.on(NODE_JS_PAUSE_EVENT, onPause);

    add(dispatcher, _ => {
      writableValue.removeListener("drain", onDrain);
      writableValue.removeListener("finish", onFinish);
      writableValue.removeListener(NODE_JS_PAUSE_EVENT, onPause);
    });

    dispatch(dispatcher, FlowMode.Resume);
  });

const createWritableAndSetupEventSubscription = (
  factory: Factory<DisposableValueLike<Writable>>,
  events: ObservableLike<FlowEvent<Uint8Array>>,
) => (scheduler: SchedulerLike) => {
  const writable = factory();
  const writableValue = writable.value;
  const streamEventsSubscription = pipe(
    events,
    onNotify(ev => {
      switch (ev.type) {
        case FlowEventType.Next:
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type exception regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writableValue.write(Buffer.from(ev.data))) {
            // Hack in a custom event here for pause request
            writableValue.emit(NODE_JS_PAUSE_EVENT);
          }
          break;
        case FlowEventType.Complete:
          writableValue.end();
          break;
      }
    }),
    subscribe(scheduler),
  );

  return add(writable, streamEventsSubscription);
};

export const createWritableFlowableSink = (
  factory: Factory<DisposableValueLike<Writable>>,
): FlowableSinkLike<Uint8Array> =>
  createStreamable(events =>
    using(
      createWritableAndSetupEventSubscription(factory, events),
      createWritableEventsObservable,
    ),
  );
