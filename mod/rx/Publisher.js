/// <reference types="./Publisher.d.ts" />

import Publisher_create from "./Publisher/__internal__/Publisher.create.js";
import Publisher_createRefCounted from "./Publisher/__internal__/Publisher.createRefCounted.js";
export const create = Publisher_create;
export const createRefCounted = Publisher_createRefCounted;
