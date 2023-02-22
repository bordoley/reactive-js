import {
  toEnumerableObservableTests,
  toEnumerableTests,
  toRunnableObservableTests,
} from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { IterableLike } from "../../containers.js";
import Iterable from "../Iterable.js";

testModule(
  "Iterable",
  toEnumerableTests<IterableLike>(Iterable),
  toEnumerableObservableTests<IterableLike>(Iterable),
  toRunnableObservableTests<IterableLike>(Iterable),
);
