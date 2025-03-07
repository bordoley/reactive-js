import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  OverflowBackpressureStrategy,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribe: Observable.Signature["subscribe"] = (
  scheduler,
  options,
) =>
  Observable_subscribeWithConfig(scheduler, {
    [QueueableLike_capacity]: options?.capacity ?? MAX_SAFE_INTEGER,
    [QueueableLike_backpressureStrategy]:
      options?.backpressureStrategy ?? OverflowBackpressureStrategy,
  });

export default Observable_subscribe;
