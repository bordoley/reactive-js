import { Array_length, Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectIsSome,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Observable from "../../computations/Observable.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  Computation_multicastOfT,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../computations.js";
import {
  Optional,
  SideEffect1,
  bindMethod,
  ignore,
  isSome,
  pick,
  pipe,
  pipeLazy,
  raise,
} from "../../functions.js";
import {
  DisposableContainerLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";

const EventSourceTypes = {
  [Computation_multicastOfT]: EventSource.never(),
};

testModule(
  "EventSource",
  ComputationModuleTests(
    {
      ...EventSource,
      fromReadonlyArray<T>() {
        return (arr: readonly T[]) => ({
          [ComputationLike_isDeferred]: false as const,
          [ComputationLike_isSynchronous]: false as const,

          [DisposableContainerLike_add](
            _: Disposable | SideEffect1<Optional<Error>>,
          ) {},

          [EventSourceLike_addEventListener](listener: EventListenerLike<T>) {
            for (let i = 0; i < arr[Array_length]; i++) {
              listener[EventListenerLike_notify](arr[i]);
            }
            listener[DisposableLike_dispose]();
          },
        });
      },
      toReadonlyArray<T>() {
        return (eventSource: EventSourceLike<T>) => {
          const result: T[] = [];
          const subscription = pipe(
            eventSource,
            EventSource.addEventHandler(bindMethod(result, Array_push)),
          );

          if (isSome(subscription[DisposableLike_error])) {
            throw subscription[DisposableLike_error];
          }

          return result;
        };
      },
    },
    EventSourceTypes,
  ),
  ConcurrentReactiveComputationModuleTests(
    {
      ...EventSource,
      fromObservable: Observable.toEventSource,
      toObservable: Observable.fromEventSource,
    },
    EventSourceTypes,
  ),
  describe(
    "create",
    test(
      "when the setup function throws",
      pipeLazy(
        EventSource.create(_ => raise()),
        EventSource.addEventHandler(ignore),
        pick(DisposableLike_error),
        expectIsSome,
      ),
    ),
  ),
);

((_: EventSource.Signature) => {})(EventSource);
