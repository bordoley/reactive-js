import * as Disposable from "../Disposable.js";
import * as EventSource from "../EventSource.js";
import ReadonlyArray_toEventSource from "../ReadonlyArray/__internal__/ReadonlyArray.toEventSource.js";
import { testModule } from "../__internal__/testing.js";
import { isSome, pipe } from "../functions.js";
import { DisposableLike_error, EventSourceLike } from "../types.js";
import ContainerModuleTests from "./fixtures/ContainerModuleTests.js";

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
  ContainerModuleTests(
    EventSource,
    () => Disposable.disposed,
    ReadonlyArray_toEventSource,
    toReadonlyArray,
  ),
);

((_: EventSource.Signature) => {})(EventSource);
