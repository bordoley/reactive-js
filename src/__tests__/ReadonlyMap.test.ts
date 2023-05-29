import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeCollectionContainerModuleTests from "./fixtures/AssociativeCollectionContainerModuleTests.js";
import CollectionContainerModuleTests from "./fixtures/CollectionContainerModuleTests.js";

testModule(
  "ReadonlyMap",
  ...AssociativeCollectionContainerModuleTests(
    ReadonlyMap.CreateModule<string>(),
  ),
  ...CollectionContainerModuleTests(ReadonlyMap.CreateModule<number>(), <T>() =>
    ReadonlyArray.toReadonlyMap<T, number>(),
  ),
);

((_: ReadonlyMap.Signature) => {})(ReadonlyMap);
