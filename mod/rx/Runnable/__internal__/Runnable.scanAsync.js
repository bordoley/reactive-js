/// <reference types="./Runnable.scanAsync.d.ts" />

import HigherOrderObservable_scanAsync from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_scanAsync = HigherOrderObservable_scanAsync(Runnable_create);
export default Runnable_scanAsync;
