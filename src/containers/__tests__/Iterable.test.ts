import { testModule } from "../../__internal__/testing.js";
import {
  toEnumerableTests,
  toRunnableWithDelayTests,
} from "../../__tests__/operators.js";
import { IterableLike } from "../../containers.js";
import * as Iterable from "../Iterable.js";

testModule(
  "Iterable",
  toEnumerableTests<IterableLike>(Iterable),
  toRunnableWithDelayTests<IterableLike>(Iterable),
);
