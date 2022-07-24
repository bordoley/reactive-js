/// <reference types="./IterableLike.d.ts" />
import { identity } from '../util/functions.mjs';

const toIterable = () => identity;
const toIterableT = {
    toIterable,
};

export { toIterable, toIterableT };
