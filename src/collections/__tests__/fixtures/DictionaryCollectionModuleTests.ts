import {
  describe,
  expectArrayEquals,
  test,
} from "../../../__internal__/testing.js";
import {
  Collection,
  DictionaryCollectionModule,
} from "../../../collections.js";
import { arrayEquality, pipe, pipeLazy, tuple } from "../../../functions.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";

const DictionaryCollectionModuleTests = <C extends Collection>(
  m: DictionaryCollectionModule<C>,
) =>
  describe(
    "DictionaryCollectionModule",
    describe(
      "union",
      test(
        "union of two disjoint Dictionaries",
        pipeLazy(
          [tuple("a", "a")],
          ReadonlyArray.values(),
          m.fromEntries(),
          m.union(
            pipe([tuple("b", "b")], ReadonlyArray.values(), m.fromEntries()),
          ),
          m.entries(),
          ReadonlyArray.fromIterable(),
          expectArrayEquals([tuple("a", "a"), tuple("b", "b")], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
      test(
        "union of two Dictionaries with overlapping keys",
        pipeLazy(
          [tuple("a", "a"), tuple("b", "c")],
          ReadonlyArray.values(),
          m.fromEntries(),
          m.union(
            pipe([tuple("b", "b")], ReadonlyArray.values(), m.fromEntries()),
          ),
          m.entries(),
          ReadonlyArray.fromIterable(),
          expectArrayEquals([tuple("a", "a"), tuple("b", "b")], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
    ),
  );

export default DictionaryCollectionModuleTests;
