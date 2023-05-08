/// <reference types="./Enumerable.scanLast.d.ts" />

import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Enumerable_create from "./Enumerable.create.js";
const EnumerableObservable_scanLast = HigherOrderObservable_scanLast(Enumerable_create);
export default EnumerableObservable_scanLast;
