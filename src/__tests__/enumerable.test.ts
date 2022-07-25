import { describe } from "../__internal__/testing";
import { toEnumerable } from "../containers/ReadonlyArrayLike";
import {
  distinctUntilChangedT,
  keepT,
  toReadonlyArrayT,
} from "../ix/EnumerableLike";
import { distinctUntilChanged } from "./operators/distinctUntilChanged.test";
import { keep } from "./operators/keep.test";

export const tests = describe(
  "enumerable",
  distinctUntilChanged({
    fromArray: toEnumerable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
  }),
  keep({
    fromArray: toEnumerable,
    ...keepT,
    ...toReadonlyArrayT,
  }),
);
