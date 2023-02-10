import Iterable from "../../containers/Iterable";
import { pipeLazy } from "../../functions";
import RunnableObservable from "../../rx/RunnableObservable";
import { describe, expectArrayEquals, test, testModule } from "../testing";

testModule(
  "Iterable",
  describe(
    "toObservable",
    test(
      "without delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Iterable.toRunnableObservable(),
        RunnableObservable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Iterable.toRunnableObservable({ delay: 1 }),
        RunnableObservable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
  ),
);
