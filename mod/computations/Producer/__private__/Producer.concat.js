/// <reference types="./Producer.concat.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Producer_concat = 
/*@__PURE__*/ DeferredSource.concat(Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Producer_concat;
