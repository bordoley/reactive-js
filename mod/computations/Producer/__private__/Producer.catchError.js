/// <reference types="./Producer.catchError.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Producer_catchError = ((errorHandler, options) => DeferredReactiveSource.catchError((Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing), errorHandler, options));
export default Producer_catchError;
