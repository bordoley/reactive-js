/// <reference types="./AsyncEnumerable.generateAsync.d.ts" />

import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
const AsyncEnumerable_generateAsync = (generator, initialValue) => Streamable_createLifted(Observable_scanAsync(generator, initialValue), true, false, false);
export default AsyncEnumerable_generateAsync;
