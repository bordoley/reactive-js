/// <reference types="./Producer.repeat.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_repeat = ((shouldRepeat) => DeferredEventSource.repeat(Consumer.createDelegatingNonCompleting, shouldRepeat));
export default Producer_repeat;
