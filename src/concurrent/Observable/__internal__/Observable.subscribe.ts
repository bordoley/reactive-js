import {
  QueueableLike_capacity,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribe: Observable.Signature["subscribe"] = (
  scheduler,
  options,
) =>
  Observable_subscribeWithConfig(scheduler, {
    [QueueableLike_capacity]: options?.capacity ?? MAX_SAFE_INTEGER,
    [QueueableLike_backpressureStrategy]:
      options?.backpressureStrategy ?? "overflow",
  });

export default Observable_subscribe;
