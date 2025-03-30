/// <reference types="./Broadcaster.toProducer.d.ts" />

import { SourceLike_subscribe, } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Broadcaster_toProducer = 
/*@__PURE__*/ returns((src) => DeferredSource.create((consumer) => {
    src[SourceLike_subscribe](consumer);
}));
export default Broadcaster_toProducer;
