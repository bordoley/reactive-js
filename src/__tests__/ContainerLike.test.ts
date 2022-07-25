import { describe, expectArrayEquals, test } from "../__internal__/testing";
import { emptyReadonlyArray } from "../containers";
import { ignoreElements } from "../containers/ContainerLike";
import { toEnumerable } from "../containers/ReadonlyArrayLike";
import { pipeLazy } from "../functions";
import { EnumerableLike } from "../ix";
import { keepT, toReadonlyArray } from "../ix/EnumerableLike";

export const ContainerLikeTests = describe(
  "ContainerLike",
  describe(
    "ignoreElements",
    test(
      "ignoreElements",
      pipeLazy(
        [1, 2, 3],
        toEnumerable(),
        ignoreElements<EnumerableLike, number>(keepT),
        toReadonlyArray(),
        expectArrayEquals(emptyReadonlyArray()),
      ),
    ),
  ),
);
