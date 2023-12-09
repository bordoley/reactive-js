/// <reference types="./Subject.d.ts" />

import Subject_create from "./Subject/__internal__/Subject.create.js";
import Subject_createRefCounted from "./Subject/__internal__/Subject.createRefCounted.js";
export const create = Subject_create;
export const createRefCounted = Subject_createRefCounted;
