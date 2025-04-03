/// <reference types="./Producer.concat.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_concat = 
/*@__PURE__*/ DeferredEventSource.concat(Consumer.createDelegatingNonCompleting);
export default Producer_concat;
