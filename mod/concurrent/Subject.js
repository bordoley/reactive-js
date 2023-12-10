/// <reference types="./Subject.d.ts" />

import Subject_create from "./Subject/__private__/Subject.create.js";
import Subject_createRefCounted from "./Subject/__private__/Subject.createRefCounted.js";
export const create = Subject_create;
export const createRefCounted = Subject_createRefCounted;
