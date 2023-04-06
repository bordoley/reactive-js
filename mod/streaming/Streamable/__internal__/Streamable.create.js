/// <reference types="./Streamable.create.d.ts" />

import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";
const Streamable_create = (op) => Streamable_createWithConfig(op, {
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_isRunnable]: false,
});
export default Streamable_create;
