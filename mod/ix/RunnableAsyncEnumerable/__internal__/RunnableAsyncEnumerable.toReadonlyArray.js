/// <reference types="./RunnableAsyncEnumerable.toReadonlyArray.d.ts" />

import { compose } from "../../../functions.js";
import RunnableObservable_toReadonlyArray from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.js";
import AsyncEnumerable_toObservable from "../../AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.js";
const RunnableAsyncEnumerable_toReadonlyArray = () => compose(AsyncEnumerable_toObservable(), RunnableObservable_toReadonlyArray());
export default RunnableAsyncEnumerable_toReadonlyArray;
