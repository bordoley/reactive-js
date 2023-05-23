import * as DeferredObservable from "../DeferredObservable.js";
import * as Observable from "../Observable.js";
import * as Runnable from "../Runnable.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import {
  alwaysTrue,
  identityLazy,
  increment,
  pipe,
  pipeLazy,
  returns,
} from "../functions.js";
import HigherOrderObservableModuleTests from "./fixtures/HigherOrderObservableModuleTests.js";

testModule(
  "DeferredObservable",
  HigherOrderObservableModuleTests<DeferredObservable.Type>(
    DeferredObservable,
    identityLazy,
  ),
  describe(
    "retry",
    test(
      "retrys the container on an exception",
      pipeLazy(
        Observable.concat(
          pipe(
            Observable.generate(increment, returns(0)),
            Observable.takeFirst({ count: 3 }),
          ),
          Observable.throws(),
        ),
        DeferredObservable.retry(alwaysTrue),
        Observable.takeFirst<number>({ count: 6 }),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
);

((_: DeferredObservable.Signature) => {})(DeferredObservable);
