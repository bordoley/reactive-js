import * as Disposable from "../Disposable.js";
import * as Enumerable from "../Enumerable.js";
import * as Observable from "../Observable.js";
import { testModule } from "../__internal__/testing.js";
import { ContainerOf } from "../types.js";
import EffectsContainerModuleTests from "./fixtures/EffectsContainerModuleTests.js";
import EnumerableContainerModuleTests from "./fixtures/EnumerableContainerModuleTests.js";
import StatefulContainerModuleTests from "./fixtures/StatefulContainerModuleTests.js";

testModule(
  "Enumerable",
  ...EnumerableContainerModuleTests(Enumerable),
  StatefulContainerModuleTests<Enumerable.Type>(
    Enumerable,
    Observable.toReadonlyArrayAsync,
  ),
  EffectsContainerModuleTests(
    Enumerable,
    () => Disposable.disposed,
    <T>() =>
      (arr: ReadonlyArray<T>) =>
        Enumerable.fromReadonlyArray<T>()(arr),
    <T>() =>
      (c: ContainerOf<Enumerable.Type, T>) =>
        Enumerable.toReadonlyArray<T>()(c),
  ),
);

((_: Enumerable.Signature) => {})(Enumerable);
