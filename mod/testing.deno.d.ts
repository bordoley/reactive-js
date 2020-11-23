/// <reference types="node" />
import { TestGroup } from './testing';

declare const runTests: (testGroups: TestGroup[]) => void;

export { runTests };
