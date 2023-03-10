/// <reference types="./AsyncEnumerable.generateLast.d.ts" />

import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
const AsyncEnumerable_generateLast = (generator, initialValue) => Streamable_createLifted(Observable_scanLast(generator, initialValue), true, false, false);
export default AsyncEnumerable_generateLast;
