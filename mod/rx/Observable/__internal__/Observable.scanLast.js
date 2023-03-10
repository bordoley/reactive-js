/// <reference types="./Observable.scanLast.d.ts" />

import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Observable_create from "./Observable.create.js";
const Observable_scanLast = HigherOrderObservable_scanLast(Observable_create);
export default Observable_scanLast;
