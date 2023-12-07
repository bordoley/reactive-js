import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../concurrent.js";
import { pipe, pipeLazy } from "../../functions.js";
import * as Observable from "../Observable.js";

testModule(
  "Observable",
  describe(
    "switchMap",
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.switchMap<number, number>(
          _ => pipe([1, 2, 3], Observable.fromReadonlyArray()),
          {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isPure]: true,
            [ObservableLike_isRunnable]: true,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
);
