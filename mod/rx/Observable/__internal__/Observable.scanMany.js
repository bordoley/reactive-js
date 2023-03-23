/// <reference types="./Observable.scanMany.d.ts" />

import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import Observable_create from "./Observable.create.js";
const Observable_scanMany = HigherOrderObservable_scanMany(Observable_create);
export default Observable_scanMany;
