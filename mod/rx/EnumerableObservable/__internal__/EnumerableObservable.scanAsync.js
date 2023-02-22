/// <reference types="./EnumerableObservable.scanAsync.d.ts" />

import HigherOrderObservable_scanAsync from "../../__internal__/HigherOrderObservable/HigherOrderObservable.scanAsync.js";
import EnumerableObservable_create from "./EnumerableObservable.create.js";
const EnumerableObservable_scanAsync = HigherOrderObservable_scanAsync(EnumerableObservable_create);
export default EnumerableObservable_scanAsync;
