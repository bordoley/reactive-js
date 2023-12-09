import { SchedulerLike } from "../../../concurrent.js";
import { Factory } from "../../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";

const Observable_multicast: Observable.Signature["multicast"] = <T>(
  schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
  options: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  } = {},
) => Observable_multicastImpl<T>(Subject_create, schedulerOrFactory, options);

export default Observable_multicast;
