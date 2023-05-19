import * as EventSource from "../EventSource.js";
import { testModule } from "../__internal__/testing.js";
import { isSome, pipe } from "../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  EventSourceLike,
  SinkLike_notify,
} from "../types.js";
import ContainerTypeClassTests from "./fixtures/ContainerTypeClassTests.js";

const fromReadonlyArray =
  <T>() =>
  (arr: ReadonlyArray<T>) =>
    EventSource.create<T>(listener => {
      for (let i = 0; i < arr.length; i++) {
        listener[SinkLike_notify](arr[i]);
      }
      listener[DisposableLike_dispose]();
    });

const toReadonlyArray =
  <T>() =>
  (eventSource: EventSourceLike<T>) => {
    const result: T[] = [];
    const subscription = pipe(
      eventSource,
      EventSource.addEventHandler(v => {
        result.push(v);
      }),
    );

    if (isSome(subscription[DisposableLike_error])) {
      throw subscription[DisposableLike_error];
    }

    return result;
  };

testModule(
  "EventSource",
  ContainerTypeClassTests(EventSource, fromReadonlyArray, toReadonlyArray),
);

((_: EventSource.Signature) => {})(EventSource);
