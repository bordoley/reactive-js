/// <reference types="./Runnable.scanMany.d.ts" />

import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_scanMany = HigherOrderObservable_scanMany(Runnable_create);
export default Runnable_scanMany;
