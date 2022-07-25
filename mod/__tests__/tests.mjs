/// <reference types="./tests.d.ts" />
import { runTests } from '../__internal__/testing.mjs';
import { tests } from './disposable.test.mjs';
import { tests as tests$1 } from './enumerable.test.mjs';

/**
 * @jest-environment node
 */
runTests([tests, tests$1]);
