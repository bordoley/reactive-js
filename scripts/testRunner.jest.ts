/**
 * @jest-environment node
 */

import { runTests } from "../src/testing";
import { tests  } from "../src/__tests__";
import { tests as nodeTests } from "../src/__tests__/node.test";

runTests([...tests, nodeTests]);
