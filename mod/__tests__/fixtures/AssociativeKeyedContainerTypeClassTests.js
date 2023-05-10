/// <reference types="./AssociativeKeyedContainerTypeClassTests.d.ts" />

import { describe } from "../../__internal__/testing.js";
import KeyedContainerTypeClassTests from "./KeyedContainerTypeClassTests.js";
const AssociativeKeyedContainerTypeClassTests = (m) => describe("AssociativeKeyedContainerTypeClassTests", ...KeyedContainerTypeClassTests(m).tests);
export default AssociativeKeyedContainerTypeClassTests;
