/**
 * @jest-environment node
 */

import { runTests } from "../src/testing";
import { tests } from "../src/__tests__";
import { tests as nodeTests } from "../src/__tests__/node.test";
import { tests as parserCombinatorTests } from "../src/__tests__/parserCombinators.test";
import { tests as queuesTests } from "../src/__tests__/queues.test";

runTests([...tests, nodeTests, parserCombinatorTests, queuesTests]);
