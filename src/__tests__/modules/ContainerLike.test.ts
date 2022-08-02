import { describe, expectArrayEquals, test } from "../../__internal__/testing";
import { emptyReadonlyArray } from "../../containers";
import {
  concatMap,
  concatWith,
  endWith,
  ignoreElements,
  mapTo,
  startWith,
  zipWith,
} from "../../containers/ContainerLike";
import { toEnumerable } from "../../containers/ReadonlyArrayLike";
import { arrayEquality, pipe, pipeLazy } from "../../functions";
import { EnumerableLike } from "../../ix";
import {
  concatAllT,
  concatT,
  keepT,
  mapT,
  toReadonlyArray,
  zipT,
} from "../../ix/EnumerableLike";

export const ContainerLikeTests = describe(
  "ContainerLike",
  describe(
    "concatMap",
    test(
      "maps each value to a container and flattens",
      pipeLazy(
        [0, 1],
        toEnumerable(),
        concatMap<EnumerableLike, number, number>(
          { ...concatAllT, ...mapT },
          pipeLazy([1, 2, 3], toEnumerable()),
        ),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
  describe(
    "concatWith",
    test(
      "concats two containers together",
      pipeLazy(
        [0, 1],
        toEnumerable(),
        concatWith<EnumerableLike, number>(
          concatT,
          pipe([2, 3, 4], toEnumerable()),
        ),
        toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
  ),
  describe(
    "endWith",
    test(
      "appends the additional values to the end of the container",
      pipeLazy(
        [0, 1],
        toEnumerable(),
        endWith<EnumerableLike, number>(
          { ...concatT, fromArray: toEnumerable },
          2,
          3,
          4,
        ),
        toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
  ),
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
    "startWith",
    test(
      "appends the additional values to the start of the container",
      pipeLazy(
        [0, 1],
        toEnumerable(),
        startWith<EnumerableLike, number>(
          { ...concatT, fromArray: toEnumerable },
          2,
          3,
          4,
        ),
        toReadonlyArray(),
        expectArrayEquals([2, 3, 4, 0, 1]),
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
