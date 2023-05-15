import * as Enumerable from "../Enumerable.js";
import { testModule } from "../__internal__/testing.js";

import EnumerableContainerTypeClassTests from "./fixtures/EnumerableContainerTypeClassTests.js";

testModule("Enumerable", EnumerableContainerTypeClassTests(Enumerable));
