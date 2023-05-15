/// <reference types="./Runnable.test.d.ts" />

import * as Runnable from "../Runnable.js";
import { testModule } from "../__internal__/testing.js";
import RunnableContainerTypeClassTests from "./fixtures/RunnableContainerTypeClassTests.js";
testModule("Runnable", RunnableContainerTypeClassTests(Runnable));
((_) => { })(Runnable);
