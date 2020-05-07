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
