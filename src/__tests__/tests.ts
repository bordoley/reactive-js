/**
 * @jest-environment node
 */

import { runTests } from "../__internal__/testing";
import { tests as disposableTests } from "./disposable.test";
import { tests as enumerableTests } from "./enumerable.test";

runTests([disposableTests, enumerableTests]);
