/// <reference types="./Broadcaster.toProducer.d.ts" />

import { ReactiveSourceLike_subscribe, } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Broadcaster_toProducer = 
/*@__PURE__*/ returns((src) => DeferredReactiveSource.create((consumer) => {
    src[ReactiveSourceLike_subscribe](consumer);
}));
export default Broadcaster_toProducer;
