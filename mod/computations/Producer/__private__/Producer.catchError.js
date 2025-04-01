/// <reference types="./Producer.catchError.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_catchError = ((errorHandler, options) => DeferredEventSource.catchError((Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing), errorHandler, options));
export default Producer_catchError;
