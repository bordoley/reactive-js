/// <reference types="./DeferredContainerTypeClassTests.d.ts" />

import { describe } from "../../__internal__/testing.js";
import ContainerTypeClassTests from "./ContainerTypeClassTests.js";
const DeferredContainerTypeClassTests = (m) => describe("DeferredContainerTypeClass", ...ContainerTypeClassTests(m).tests);
export default DeferredContainerTypeClassTests;
