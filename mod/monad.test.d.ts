/// <reference types="node" />
import './functions';
import './option';
import { Describe } from './testing';

declare const createMonadTests: (m: any) => Describe;

export { createMonadTests };
