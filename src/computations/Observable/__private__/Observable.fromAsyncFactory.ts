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
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";

const Observable_fromAsyncFactory: Observable.Signature["fromAsyncFactory"] =
  /*@__PURE__*/ returns(
    (f: (options?: { signal: AbortSignal }) => Promise<unknown>) =>
      Source.create(
        async (observer: ObserverLike) => {
          const signal = DisposableContainer.toAbortSignal(observer);
          try {
            const result = await f({ signal });
            observer[ListenerLike_notify](result);
            observer[SinkLike_complete]();
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
          }
        },
        {
          [ComputationLike_isPure]: false,
          [ComputationLike_isDeferred]: true,
          [ComputationLike_isSynchronous]: false,
        },
      ),
  );

export default Observable_fromAsyncFactory;
