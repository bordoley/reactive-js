/// <reference types="./RunnableObservable.scanAsync.d.ts" />

import HigherOrderObservable_scanAsync from "../../__internal__/HigherOrderObservable/HigherOrderObservable.scanAsync.js";
import RunnableObservable_create from "./RunnableObservable.create.js";
const RunnableObservable_scanAsync = HigherOrderObservable_scanAsync(RunnableObservable_create);
export default RunnableObservable_scanAsync;
