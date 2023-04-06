/// <reference types="./Flowable.create.d.ts" />

import { StreamableLike_isRunnable } from "../../../streaming.js";
import Flowable_createWithConfig from "./Flowable.createWithConfig.js";
const Flowable_create = op => Flowable_createWithConfig(op, {
    [StreamableLike_isRunnable]: false,
});
export default Flowable_create;
