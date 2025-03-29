/// <reference types="./Producer.merge.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Producer_merge = 
/*@__PURE__*/ DeferredSource.merge(Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Producer_merge;
