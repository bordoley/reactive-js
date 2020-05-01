import { Writable } from "stream";
import { createStreamable } from "@reactive-js/core/dist/js/streamable";
import {
  FlowEventType,
  FlowMode,
  FlowEvent,
  FlowableSinkLike,
} from "@reactive-js/core/dist/js/flowable";
import { DisposableValueLike } from "@reactive-js/core/dist/js/disposable";
import {
  createObservable,
  onNotify,
  subscribe,
  ObservableLike,
  using,
} from "@reactive-js/core/dist/js/observable";
import { pipe } from "@reactive-js/core/dist/js/functions";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";

const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";

const createWritableEventsObservable = (
  writable: Writable,
  autoDispose: boolean,
) =>
  createObservable(dispatcher => {
    const onDrain = () => {
      dispatcher.dispatch(FlowMode.Resume);
    };
    writable.on("drain", onDrain);

    const onFinish = () => {
      // By default we don't dispose the writable
      // because it could be a tranform.
      if (autoDispose) {
        dispatcher.dispose();
      }
    };
    writable.on("finish", onFinish);

    const onPause = () => {
      dispatcher.dispatch(FlowMode.Pause);
    };
    writable.on(NODE_JS_PAUSE_EVENT, onPause);

    dispatcher.dispatch(FlowMode.Resume);
  });

const createWritableAndSetupEventSubscription = (
  factory: () => DisposableValueLike<Writable>,
  events: ObservableLike<FlowEvent<Uint8Array>>,
) => (scheduler: SchedulerLike) => {
  const writable = factory();
  const streamEventsSubscription = pipe(
    events,
    onNotify(ev => {
      switch (ev.type) {
        case FlowEventType.Next:
          if (!writable.value.write(ev.data)) {
            // Hack in a custom event here for pause request
            writable.value.emit(NODE_JS_PAUSE_EVENT);
          }
          break;
        case FlowEventType.Complete:
          writable.value.end();
          break;
      }
    }),
    subscribe(scheduler),
  );

  return writable.add(streamEventsSubscription);
};

export const createFlowableSinkFromWritable = (
  factory: () => DisposableValueLike<Writable>,
  autoDispose = true,
): FlowableSinkLike<Uint8Array> =>
  createStreamable(events =>
    using(createWritableAndSetupEventSubscription(factory, events), disp =>
      createWritableEventsObservable(disp.value, autoDispose),
    ),
  );
