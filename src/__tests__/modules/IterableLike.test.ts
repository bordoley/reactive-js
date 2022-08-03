import { describe, expectArrayEquals, test } from "../../__internal__/testing";
import { toObservable } from "../../containers/IterableLike";
import { pipeLazy } from "../../functions";
import { toReadonlyArray as enumerableObservablToReadonlyArray } from "../../rx/EnumerableObservableLike";
import { toReadonlyArray as runnableObservableToReadonlyArray } from "../../rx/RunnableObservableLike";

export const IterableLikeTests = describe(
  "IterableLike",
  describe(
    "toObservable",
    test(
      "without delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        toObservable(),
        enumerableObservablToReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        toObservable({ delay: 1 }),
        runnableObservableToReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
  ),
);
