/// <reference types="./Producer.merge.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Producer_merge = 
/*@__PURE__*/ DeferredReactiveSource.merge(Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Producer_merge;
