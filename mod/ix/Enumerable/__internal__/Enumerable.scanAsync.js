/// <reference types="./Enumerable.scanAsync.d.ts" />

import HigherOrderObservable_scanAsync from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import Enumerable_create from "./Enumerable.create.js";
const EnumerableObservable_scanAsync = HigherOrderObservable_scanAsync(Enumerable_create);
export default EnumerableObservable_scanAsync;
