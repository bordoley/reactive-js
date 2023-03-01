/// <reference types="./RunnableAsyncEnumerable.toReadonlyArray.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_toReadonlyArray from "../../../rx/Runnable/__internal__/Runnable.toReadonlyArray.js";
import AsyncEnumerable_toObservable from "../../AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.js";
const RunnableAsyncEnumerable_toReadonlyArray = () => compose(AsyncEnumerable_toObservable(), Runnable_toReadonlyArray());
export default RunnableAsyncEnumerable_toReadonlyArray;
