import { testModule } from "../../__internal__/testing.js";
import {
  toEnumerableTests,
  toRunnableTest,
} from "../../__tests__/operators.js";
import { IterableContainerLike } from "../../containers.js";
import * as Iterable from "../Iterable.js";

testModule(
  "Iterable",
  toEnumerableTests<IterableContainerLike>(Iterable),
  toRunnableTest<IterableContainerLike>(Iterable),
);
