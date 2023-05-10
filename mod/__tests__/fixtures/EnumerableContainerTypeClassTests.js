/// <reference types="./EnumerableContainerTypeClassTests.d.ts" />

import { describe } from "../../__internal__/testing.js";
import RunnableContainerTypeClassTests from "./RunnableContainerTypeClassTests.js";
const EnumerableContainerTypeClassTests = (m) => describe("EnumerableContainerTypeClass", ...RunnableContainerTypeClassTests(m).tests);
export default EnumerableContainerTypeClassTests;
