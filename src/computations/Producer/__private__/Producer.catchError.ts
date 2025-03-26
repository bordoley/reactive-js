import {
  HigherOrderInnerComputationLike,
  ProducerLike,
} from "../../../computations.js";
import { Function1, SideEffect1 } from "../../../functions.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Producer_catchError: Producer.Signature["catchError"] = (<T>(
  errorHandler: SideEffect1<Error> | Function1<Error, ProducerLike<T>>,
  options?: {
    readonly innerType?: HigherOrderInnerComputationLike;
  },
) =>
  DeferredSource.catchError(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing<T>,
    errorHandler,
    options,
  )) as Producer.Signature["catchError"];

export default Producer_catchError;
