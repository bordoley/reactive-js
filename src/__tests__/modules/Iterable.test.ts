import Iterable from "../../containers/Iterable";
import { pipeLazy } from "../../functions";
import Observable from "../../rx/Observable";
import { describe, expectArrayEquals, test, testModule } from "../testing";

testModule(
  "Iterable",
  describe(
    "toObservable",
    test(
      "without delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Iterable.toObservable(),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Iterable.toObservable({ delay: 1 }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
  ),
);
