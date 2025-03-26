/// <reference types="./Producer.subscribe.d.ts" />

import { SourceLike_subscribe } from "../../../computations.js";
import { invoke, pipe, returns } from "../../../functions.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
const Producer_subscribe = 
/*@__PURE__*/ returns((producer) => {
    const consumer = Consumer.createDropOldestWithoutBackpressure(0);
    pipe(producer, invoke(SourceLike_subscribe, consumer));
    return consumer;
});
export default Producer_subscribe;
