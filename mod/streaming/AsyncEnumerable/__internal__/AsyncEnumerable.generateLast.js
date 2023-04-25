/// <reference types="./AsyncEnumerable.generateLast.d.ts" />

import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import AsyncEnumerable_create from "./AsyncEnumerable.create.js";
const AsyncEnumerable_generateLast = (generator, initialValue) => AsyncEnumerable_create(Observable_scanLast(generator, initialValue));
export default AsyncEnumerable_generateLast;
