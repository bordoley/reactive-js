import { SchedulerLike } from "../../../concurrent.js";
import { EventListenerLike_notify } from "../../../events.js";
import { bindMethod, pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_multicast: Observable.Signature["multicast"] =
  (
    scheduler: SchedulerLike,
    options: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    } = {},
  ) =>
  observable => {
    const subject = Subject.create(options);

    pipe(
      observable,
      Observable_forEach(bindMethod(subject, EventListenerLike_notify)),
      Observable_subscribe(scheduler, options),
      Disposable.bindTo(subject),
    );

    return subject;
  };

export default Observable_multicast;
