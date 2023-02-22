import { IterableLike } from "../../containers.js";
import Iterable from "../../containers/Iterable.js";
import {
  toEnumerableObservableTests,
  toEnumerableTests,
  toRunnableObservableTests,
} from "../operators.js";
import { testModule } from "../testing.js";

testModule(
  "Iterable",
  toEnumerableTests<IterableLike>(Iterable),
  toEnumerableObservableTests<IterableLike>(Iterable),
  toRunnableObservableTests<IterableLike>(Iterable),
);
