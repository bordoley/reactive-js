import { testModule } from "../../__internal__/testing.js";
import * as Indexed from "../Indexed.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";

testModule(
  "Indexed",
  KeyedCollectionModuleTests(Indexed, ReadonlyArray.toIndexed),
);

((_: Indexed.Signature) => {})(Indexed);
