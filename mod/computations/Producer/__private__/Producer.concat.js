/// <reference types="./Producer.concat.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Producer_genPure } from "./Producer.gen.js";
const m = {
    genPure: Producer_genPure,
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
};
const Producer_concat = 
/*@__PURE__*/ DeferredSource.creatConcat(m);
export default Producer_concat;
