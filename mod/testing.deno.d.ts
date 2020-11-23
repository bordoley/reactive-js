/// <reference types="node" />
import './functions';
import './option';
import { TestGroup } from './testing';

declare const runTests: (testGroups: TestGroup[]) => void;

export { runTests };
