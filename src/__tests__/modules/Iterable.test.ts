import { IterableLike } from "../../containers";
import Iterable from "../../containers/Iterable";
import {
  toEnumerableObservableTests,
  toEnumerableTests,
  toRunnableObservableTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "Iterable",
  toEnumerableTests<IterableLike>(Iterable),
  toEnumerableObservableTests<IterableLike>(Iterable),
  toRunnableObservableTests<IterableLike>(Iterable),
);
