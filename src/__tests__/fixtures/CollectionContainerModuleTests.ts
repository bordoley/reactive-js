import * as Dictionary from "../../Dictionary.js";
import * as Disposable from "../../Disposable.js";
import * as Observable from "../../Observable.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
} from "../../__internal__/testing.js";
import {
  Function1,
  Optional,
  arrayEquality,
  compose,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import {
  CollectionContainerModule,
  CollectionLike_count,
  Container,
  ContainerOf,
} from "../../types.js";
import ContainerModuleTests from "./ContainerModuleTests.js";

const CollectionContainerModuleTests = <C extends Container>(
  m: CollectionContainerModule<C>,
  fromReadonlyArray: <T>(
    _?: unknown,
  ) => Function1<ReadonlyArray<T>, ContainerOf<C, T, number>>,
) => [
  ContainerModuleTests(
    m,
    () => Disposable.disposed,
    fromReadonlyArray,
    <T>() => compose(m.values<T>(), Observable.toReadonlyArray()),
  ),
  describe(
    "CollectionContainerModuleTests",
    describe(
      "empty",
      test(
        "returns an empty enumerator",
        pipeLazy(
          m.empty<number>(),
          m.values(),
          Observable.toReadonlyArray(),
          expectArrayEquals<number>([]),
        ),
      ),
    ),
    describe(
      "entries",
      test(
        "enumerates all entries",
        pipeLazy(
          ["b", "d"],

          fromReadonlyArray(),
          m.entries<string, number>(),
          Observable.toReadonlyArray<[number, string]>(),
          expectArrayEquals(
            [
              [0, "b"],
              [1, "d"],
            ],
            arrayEquality(),
          ),
        ),
      ),
    ),
    describe(
      "forEach",
      test("iterate and imperatively sum the keys", () => {
        let result = "";

        pipe(
          ["b", "d", "v"],
          fromReadonlyArray(),
          m.forEach(value => {
            result = result + value;
          }),
        );

        pipe(result, expectEquals("bdv"));
      }),
    ),
    describe(
      "forEachWithKey",
      test("iterate and imperatively sum the keys", () => {
        let result = 0;

        pipe(
          ["b", "d", "v"],
          fromReadonlyArray(),
          m.forEachWithKey((_, key) => {
            result = result + key;
          }),
        );

        pipe(result, expectEquals(3));
      }),
    ),
    describe(
      "keepWithKey",
      test(
        "filters out entries by key",

        pipeLazy(
          ["b", "d", "v"],
          fromReadonlyArray(),
          m.keepWithKey((_, key) => key === 1),
          m.values(),
          Observable.toReadonlyArray(),
          expectArrayEquals(["d"]),
        ),
      ),
    ),
    describe(
      "keySet",
      test("returns a keyset with all the keys", () => {
        const keys = pipe(
          ["b", none, "v"],
          fromReadonlyArray<Optional<string>>(),
          m.keySet(),
        );

        pipe(keys.size, expectEquals(3));
        pipe(Array.from(keys), expectArrayEquals([0, 1, 2]));
      }),
    ),
    describe(
      "mapWithKey",
      test(
        "mapping every value to its key",

        pipeLazy(
          ["b", "d", "f"],
          fromReadonlyArray(),
          m.mapWithKey<string, number, number>((_, key) => key),
          m.values(),
          Observable.toReadonlyArray(),
          expectArrayEquals([0, 1, 2]),
        ),
      ),
    ),
    describe(
      "reduce",
      test(
        "summing all values",
        pipeLazy(
          [1, 2, 3],
          fromReadonlyArray(),
          m.reduce<number, number>((acc, next) => acc + next, returns(0)),
          expectEquals(6),
        ),
      ),
    ),
    describe(
      "reduceWithKey",
      test(
        "summing the keys",
        pipeLazy(
          ["a", "B", "c"],
          fromReadonlyArray(),
          m.reduceWithKey(
            (acc: number, _: string, key: number) => acc + key,
            returns(0),
          ),
          expectEquals(3),
        ),
      ),
    ),
    describe(
      "toDictionary",
      test("count", () => {
        const dict = pipe(
          ["b", none, "v"],
          fromReadonlyArray<Optional<string>>(),
          m.toDictionary(),
        );

        expectEquals(3)(dict[CollectionLike_count]);
      }),
      test("get values", () => {
        const dict = pipe(
          ["b", none, "v"],
          fromReadonlyArray<Optional<string>>(),
          m.toDictionary(),
        );

        pipe(
          dict,
          Dictionary.values(),
          Observable.toReadonlyArray(),
          expectArrayEquals(["b", none, "v"]),
        );
      }),
      test(
        "keys",
        pipeLazy(
          ["b", none, "v"],
          fromReadonlyArray<Optional<string>>(),
          m.toDictionary<Optional<string>, number>(),
          Dictionary.keys(),
          Observable.toReadonlyArray(),
          expectArrayEquals([0, 1, 2]),
        ),
      ),
    ),
    describe(
      "toReadonlyMap",
      test("from non-empty map", () => {
        const dict = pipe(
          ["b", "d", "v"],
          fromReadonlyArray<Optional<string>>(),
          m.toReadonlyMap(),
        );

        pipe(
          dict,
          ReadonlyMap.keys(),
          Observable.toReadonlyArray(),
          expectArrayEquals([0, 1, 2]),
        );
      }),
    ),
  ),
];

export default CollectionContainerModuleTests;
