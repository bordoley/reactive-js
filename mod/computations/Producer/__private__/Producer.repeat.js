/// <reference types="./Producer.repeat.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Producer_repeat = ((shouldRepeat) => DeferredSource.repeat(Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRepeat));
export default Producer_repeat;
