import { toObservable } from "../../containers/IterableLike";
import { pipeLazy } from "../../functions";
import { toReadonlyArray } from "../../rx/ObservableLike";
import { describe, expectArrayEquals, test, testModule } from "../testing";

testModule(
  "IterableLike",
  describe(
    "toObservable",
    test(
      "without delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        toObservable(),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        toObservable({ delay: 1 }),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
  ),
);
