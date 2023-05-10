/// <reference types="./RunnableContainerTypeClassTests.d.ts" />

import { describe } from "../../__internal__/testing.js";
import DeferredContainerTypeClassTests from "./DeferredContainerTypeClassTests.js";
const RunnableContainerTypeClassTests = (m) => describe("RunnableContainerTypeClass", ...DeferredContainerTypeClassTests(m).tests);
export default RunnableContainerTypeClassTests;
