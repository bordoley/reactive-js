import { SchedulerLike } from "../../../concurrent.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";

const Observable_share: Observable.Signature["share"] = <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly replay?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
) =>
  Observable_multicastImpl<T>(Subject.create, scheduler, {
    ...options,
    autoDispose: true,
  });

export default Observable_share;
