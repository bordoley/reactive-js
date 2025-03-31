/// <reference types="./Producer.catchError.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Producer_catchError = ((errorHandler, options) => DeferredSource.catchError((Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing), errorHandler, options));
export default Producer_catchError;
