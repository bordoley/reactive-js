/// <reference types="./EnumerableLike.empty.d.ts" />
import empty$1 from '../EnumeratorLike/EnumeratorLike.empty.mjs';
import create from './EnumerableLike.create.mjs';

const empty = /*@__PURE__*/ (() => () => create(empty$1))();

export { empty as default };
