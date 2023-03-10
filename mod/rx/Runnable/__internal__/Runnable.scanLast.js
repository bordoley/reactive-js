/// <reference types="./Runnable.scanLast.d.ts" />

import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_scanLast = HigherOrderObservable_scanLast(Runnable_create);
export default Runnable_scanLast;
