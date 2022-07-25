import { describe, expectArrayEquals, test } from "../__internal__/testing";
import { emptyReadonlyArray } from "../containers";
import { ignoreElements, mapTo, zipWith } from "../containers/ContainerLike";
import { toEnumerable } from "../containers/ReadonlyArrayLike";
import { arrayEquality, pipe, pipeLazy } from "../functions";
import { EnumerableLike } from "../ix";
import { keepT, mapT, toReadonlyArray, zipT } from "../ix/EnumerableLike";

export const ContainerLikeTests = describe(
  "ContainerLike",
  describe(
    "ignoreElements",
    test(
      "ignores all elements",
      pipeLazy(
        [1, 2, 3],
        toEnumerable(),
        ignoreElements<EnumerableLike, number>(keepT),
        toReadonlyArray(),
        expectArrayEquals(emptyReadonlyArray()),
      ),
    ),
  ),
  describe(
    "mapTo",
    test(
      "maps every value in the source to v",
      pipeLazy(
        [1, 2, 3],
        toEnumerable(),
        mapTo(mapT, 2),
        toReadonlyArray(),
        expectArrayEquals([2, 2, 2]),
      ),
    ),
  ),
  describe(
    "zipWith",
    test(
      "when inputs are different lengths",
      pipeLazy(
        [1, 2, 3],
        toEnumerable(),
        zipWith<EnumerableLike, number, number>(
          zipT,
          pipe([1, 2, 3, 4], toEnumerable()),
        ),
        toReadonlyArray(),
        expectArrayEquals<readonly [number, number]>(
          [
            [1, 1],
            [2, 2],
            [3, 3],
          ],
          arrayEquality(),
        ),
      ),
    ),
  ),
);
