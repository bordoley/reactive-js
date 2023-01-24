import {
  concatMap,
  concatWith,
  endWith,
  genMap,
  ignoreElements,
  mapTo,
  startWith,
  zipWith,
} from "../../containers/ContainerLike";
import { empty } from "../../containers/ReadonlyArrayLike";
import { arrayEquality, none, pipe, pipeLazy } from "../../functions";
import { EnumerableLike } from "../../ix";
import {
  concat,
  concatAll,
  fromArray,
  fromIterable,
  keep,
  map,
  toReadonlyArray,
  zip,
} from "../../ix/EnumerableLike";
import { describe, expectArrayEquals, test, testModule } from "../testing";

testModule(
  "ContainerLike",
  describe(
    "concatMap",
    test(
      "maps each value to a container and flattens",
      pipeLazy(
        [0, 1],
        fromArray(),
        concatMap<EnumerableLike, number, number>(
          { concatAll, map },
          pipeLazy([1, 2, 3], fromArray()),
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
        fromArray(),
        concatWith<EnumerableLike, number>(
          { concat },
          pipe([2, 3, 4], fromArray()),
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
        fromArray(),
        endWith<EnumerableLike, number>({ concat, fromArray }, 2, 3, 4),
        toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
  ),
  describe(
    "genMap",

    test(
      "maps the incoming value with the inline generator function",
      pipeLazy(
        [none, none],
        fromArray(),
        genMap({ fromIterable, concatAll, map }, function* (_) {
          yield 1;
          yield 2;
          yield 3;
        }),
        toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
  describe(
    "ignoreElements",
    test(
      "ignores all elements",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        ignoreElements<EnumerableLike, number>({ keep }),
        toReadonlyArray(),
        expectArrayEquals(empty()),
      ),
    ),
  ),
  describe(
    "mapTo",
    test(
      "maps every value in the source to v",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        mapTo({ map }, 2),
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
        fromArray(),
        startWith<EnumerableLike, number>({ concat, fromArray }, 2, 3, 4),
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
        fromArray(),
        zipWith<EnumerableLike, number, number>(
          { zip },
          pipe([1, 2, 3, 4], fromArray()),
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
