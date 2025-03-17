import {
  describe,
  expectEquals,
  expectToThrowAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import * as Observable from "../../../computations/Observable.js";
import {
  ComputationModule,
  ComputationType,
  MulticastedComputationModule,
} from "../../../computations.js";
import { Optional, newInstance, pipe, pipeAsync } from "../../../functions.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import * as ComputationTest from "./helpers/ComputationTest.js";

const MulticastedComputationModuleTests = <
  TComputationType extends ComputationType,
>(
  m: MulticastedComputationModule<TComputationType> &
    ComputationModule<TComputationType>,
) => {
  return describe(
    "MulticastComputationModule",
    describe(
      "fromPromise",
      testAsync("when the promise resolves", async () => {
        using scheduler = HostScheduler.create();
        const promise = Promise.resolve(1);

        await pipeAsync(
          promise,
          m.fromPromise(),
          m.toObservable<number>(),
          Observable.lastAsync({ scheduler }),
          expectEquals<Optional<number>>(1),
        );
      }),

      testAsync("when the promise reject", async () => {
        using scheduler = HostScheduler.create();

        const error = newInstance(Error);
        const promise = Promise.reject(error);

        await expectToThrowAsync(() =>
          pipe(
            promise,
            m.fromPromise(),
            m.toObservable(),
            Observable.lastAsync({ scheduler }),
          ),
        );
      }),

      ComputationTest.isMulticastedAndNotDisposable(
        pipe(Promise.resolve(true), m.fromPromise()),
      ),
    ),
    describe("never", ComputationTest.isMulticasted(m.never())),
  );
};

export default MulticastedComputationModuleTests;
