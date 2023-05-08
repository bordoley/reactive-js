import { testModule } from "../../__internal__/testing.js";
import {
  toEnumerableTests,
  toRunnableTest,
} from "../../__tests__/operators.js";
import { IterableContainer } from "../../core.js";
import * as Iterable from "../Iterable.js";

testModule(
  "Iterable",
  toEnumerableTests<IterableContainer>(Iterable),
  toRunnableTest<IterableContainer>(Iterable),
);
