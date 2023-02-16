import { IterableLike } from "../../containers";
import Iterable from "../../containers/Iterable";
import { toEnumerableTests, toRunnableObservableTests } from "../operators";
import { testModule } from "../testing";

testModule(
  "Iterable",
  toEnumerableTests<IterableLike>(Iterable),
  toRunnableObservableTests<IterableLike>(Iterable),
);
