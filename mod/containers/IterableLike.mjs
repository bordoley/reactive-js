/// <reference types="./IterableLike.d.ts" />
import { identity } from '../functions.mjs';

const toIterable = () => identity;
const toIterableT = {
    toIterable,
};

export { toIterable, toIterableT };
