import { Writable } from "stream";
import { DisposableValueLike } from "../../disposable";
import {
  FlowEventType,
  FlowMode,
  FlowEvent,
  FlowableSinkLike,
} from "../../flowable";
import { pipe } from "../../functions";
import {
  createObservable,
  onNotify,
  subscribe,
  ObservableLike,
  using,
} from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { createStreamable } from "../../streamable";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

const createWritableEventsObservable = (
  writable: DisposableValueLike<Writable>,
) =>
  createObservable(dispatcher => {
    writable.add(dispatcher);
    const writableValue = writable.value;

    const onDrain = () => {
      dispatcher.dispatch(FlowMode.Resume);
    };
    writableValue.on("drain", onDrain);

    const onFinish = () => {
      dispatcher.dispose();
    };
    writableValue.on("finish", onFinish);

    const onPause = () => {
      dispatcher.dispatch(FlowMode.Pause);
    };
    writableValue.on(NODE_JS_PAUSE_EVENT, onPause);

    dispatcher.add(_ => {
      writableValue.removeListener("drain", onDrain);
      writableValue.removeListener("finish", onFinish);
      writableValue.removeListener(NODE_JS_PAUSE_EVENT, onPause);
    });

    dispatcher.dispatch(FlowMode.Resume);
  });

const createWritableAndSetupEventSubscription = (
  factory: () => DisposableValueLike<Writable>,
  events: ObservableLike<FlowEvent<Uint8Array>>,
) => (scheduler: SchedulerLike) => {
  const writable = factory();
  const writableValue = writable.value;
  const streamEventsSubscription = pipe(
    events,
    onNotify(ev => {
      switch (ev.type) {
        case FlowEventType.Next:
          if (!writableValue.write(ev.data)) {
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

  return writable.add(streamEventsSubscription);
};

export const createWritableFlowableSink = (
  factory: () => DisposableValueLike<Writable>,
): FlowableSinkLike<Uint8Array> =>
  createStreamable(events =>
    using(
      createWritableAndSetupEventSubscription(factory, events),
      createWritableEventsObservable,
    ),
  );
