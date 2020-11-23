/// <reference types="node" />
import { Describe } from './testing';

declare const createMonadTests: (m: any) => Describe;

export { createMonadTests };
