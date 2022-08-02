/// <reference types="./node.tests.d.ts" />
import { runTests } from '../__internal__/testing.mjs';
import { nodeTests } from './modules/node.test.mjs';

runTests([nodeTests]);
