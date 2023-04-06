/// <reference types="./Streamable.identity.d.ts" />

import { identity } from "../../../functions.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";
const instance = /*@__PURE__*/ (() => Streamable_createWithConfig(identity, {
    [StreamableLike_isEnumerable]: true,
    [StreamableLike_isInteractive]: true,
    [StreamableLike_isRunnable]: true,
}))();
const Streamable_identity = () => instance;
export default Streamable_identity;
