import {
  toEnumerableObservableTests,
  toEnumerableTests,
  toRunnableTests,
} from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { IterableLike } from "../../containers.js";
import * as Iterable from "../Iterable.js";

testModule(
  "Iterable",
  toEnumerableTests<IterableLike>(Iterable),
  toEnumerableObservableTests<IterableLike>(Iterable),
  toRunnableTests<IterableLike>(Iterable),
);
