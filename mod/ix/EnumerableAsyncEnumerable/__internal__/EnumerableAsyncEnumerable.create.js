/// <reference types="./EnumerableAsyncEnumerable.create.d.ts" />

import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { composeUnsafe } from "../../../functions.js";
import AsyncEnumerable_createBase from "../../AsyncEnumerable/__internal__/AsyncEnumerable.createBase.js";
const EnumerableAsyncEnumerable_create = ((...ops) => {
    const op = ReadonlyArray_getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return AsyncEnumerable_createBase(op, true, true);
});
export default EnumerableAsyncEnumerable_create;
