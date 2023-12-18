import { SchedulerLike } from "../../../concurrent.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";

const Observable_multicast: Observable.Signature["multicast"] = <T>(
  scheduler: SchedulerLike,
  options: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  } = {},
) => Observable_multicastImpl<T>(Subject.create, scheduler, options);

export default Observable_multicast;
