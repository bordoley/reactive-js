/// <reference types="./AsyncEnumerable.generateLast.d.ts" />

import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_createWithConfig from "../../Streamable/__internal__/Streamable.createWithConfig.js";
const AsyncEnumerable_generateLast = (generator, initialValue) => Streamable_createWithConfig(Observable_scanLast(generator, initialValue), {
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: true,
    [StreamableLike_isRunnable]: false,
});
export default AsyncEnumerable_generateLast;
