/// <reference types="./Producer.repeat.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Producer_repeat = ((shouldRepeat) => DeferredReactiveSource.repeat(Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRepeat));
export default Producer_repeat;
