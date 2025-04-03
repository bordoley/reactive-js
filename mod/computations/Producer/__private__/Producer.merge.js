/// <reference types="./Producer.merge.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_merge = 
/*@__PURE__*/ DeferredEventSource.merge(Consumer.createDelegatingNonCompleting);
export default Producer_merge;
