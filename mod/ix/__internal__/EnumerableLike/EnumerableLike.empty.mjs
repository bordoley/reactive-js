/// <reference types="./EnumerableLike.empty.d.ts" />
import EnumeratorLike__empty from '../EnumeratorLike/EnumeratorLike.empty.mjs';
import EnumerableLike__create from './EnumerableLike.create.mjs';

const EnumerableLike__empty = /*@__PURE__*/ (() => () => EnumerableLike__create(EnumeratorLike__empty))();

export { EnumerableLike__empty as default };
