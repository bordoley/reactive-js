/// <reference types="./tests.d.ts" />
import { runTests } from '../__internal__/testing.mjs';
import { tests } from './disposable.test.mjs';

/**
 * @jest-environment node
 */
runTests([tests]);
