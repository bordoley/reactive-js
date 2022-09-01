/// <reference types="./__internal__env.d.ts" />
import { isObject } from '../functions.mjs';

const __DEV__ = isObject(process)
    ? process.env.NODE_ENV !== "production"
    : false;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

export { MAX_SAFE_INTEGER, __DEV__ };
