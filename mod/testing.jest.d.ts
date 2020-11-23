/// <reference types="node" />
import { TestGroup } from './testing';

declare const runTests: (testGroups: readonly TestGroup[]) => void;

export { runTests };
