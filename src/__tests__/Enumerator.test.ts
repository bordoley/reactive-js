import * as Enumerator from "../Enumerator.js";
import { testModule } from "../__internal__/testing.js";

import RunnableContainerTypeClassTests from "./fixtures/RunnableContainerTypeClassTests.js";
testModule("Enumerator", RunnableContainerTypeClassTests(Enumerator));

((_: Enumerator.Signature) => {})(Enumerator);
