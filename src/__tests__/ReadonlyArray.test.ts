import * as Disposable from "../Disposable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import { testModule } from "../__internal__/testing.js";
import { identityLazy, returns } from "../functions.js";
import IndexedCollectionContainerModuleTests from "./fixtures/IndexedCollectionContainerModuleTests.js";
import ReactiveContainerModuleTests from "./fixtures/ReactiveContainerModuleTests.js";

testModule(
  "ReadonlyArray",
  ...ReactiveContainerModuleTests(
    ReadonlyArray,
    returns(Disposable.disposed),
    identityLazy,
    identityLazy,
  ),
  ...IndexedCollectionContainerModuleTests(ReadonlyArray),
);

((_: ReadonlyArray.Signature) => {})(ReadonlyArray);
