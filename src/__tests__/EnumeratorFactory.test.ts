import * as Disposable from "../Disposable.js";
import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";
import { ContainerOf, EnumeratorFactoryLike } from "../types.js";
import EffectsContainerModuleTests from "./fixtures/EffectsContainerModuleTests.js";
import EnumerableContainerModuleTests from "./fixtures/EnumerableContainerModuleTests.js";
import StatefulContainerModuleTests from "./fixtures/StatefulContainerModuleTests.js";

testModule(
  "EnumeratorFactory",
  ...EnumerableContainerModuleTests(EnumeratorFactory),
  StatefulContainerModuleTests<EnumeratorFactory.Type>(
    EnumeratorFactory,
    <T>() =>
      async (f: EnumeratorFactoryLike<T>) =>
        EnumeratorFactory.toReadonlyArray<T>()(f),
  ),
  EffectsContainerModuleTests(
    EnumeratorFactory,
    () => Disposable.disposed,
    <T>() =>
      (arr: ReadonlyArray<T>) =>
        EnumeratorFactory.fromReadonlyArray<T>()(arr),
    <T>() =>
      (c: ContainerOf<EnumeratorFactory.Type, T>) =>
        EnumeratorFactory.toReadonlyArray<T>()(c),
  ),
);

((_: EnumeratorFactory.Signature) => {})(EnumeratorFactory);
