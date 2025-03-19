import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isPure,
  HigherOrderInnerComputationLike,
  ProducerLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  error,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import Producer_lift from "./Producer.lift.js";

const Producer_catchError: Producer.Signature["catchError"] = (<T>(
  errorHandler: SideEffect1<Error> | Function1<Error, ProducerLike<T>>,
  options?: {
    readonly innerType?: HigherOrderInnerComputationLike;
  },
) =>
  pipe(
    (delegate: ConsumerLike<T>) =>
      pipe(
        Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing(delegate),
        Disposable.addToContainer(delegate),
        DisposableContainer.onError(err => {
          let action: Optional<ProducerLike<T>> = none;
          try {
            action = errorHandler(err) as Optional<ProducerLike<T>>;
          } catch (e) {
            delegate[DisposableLike_dispose](error([error(e), err]));
          }

          if (isSome(action)) {
            action[SourceLike_subscribe](delegate);
          } else {
            delegate[SinkLike_complete]();
          }
        }),
      ),
    Producer_lift({
      [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    }),
  )) as Producer.Signature["catchError"];

export default Producer_catchError;
