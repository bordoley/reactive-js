import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { error, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  ListenerLike_notify,
  ObserverLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";

const Producer_fromAsyncFactory: Producer.Signature["fromAsyncFactory"] =
  /*@__PURE__*/ returns(
    (f: (options?: { signal: AbortSignal }) => Promise<unknown>) =>
      Source.create(
        async (consumer: ObserverLike) => {
          const signal = DisposableContainer.toAbortSignal(consumer);
          try {
            const result = await f({ signal });
            consumer[ListenerLike_notify](result);
            consumer[SinkLike_complete]();
          } catch (e) {
            consumer[DisposableLike_dispose](error(e));
          }
        },
        {
          [ComputationLike_isPure]: false,
          [ComputationLike_isDeferred]: true,
          [ComputationLike_isSynchronous]: false,
        },
      ),
  ) as Producer.Signature["fromAsyncFactory"];

export default Producer_fromAsyncFactory;
