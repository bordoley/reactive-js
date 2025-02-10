import { SchedulerLike } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_notify from "./Observable.notify.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_multicast: Observable.Signature["multicast"] =
  (
    scheduler: SchedulerLike,
    options: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    } = {},
  ) =>
  observable => {
    const subject = Subject.create(options);

    pipe(
      observable,
      Observable_notify(subject),
      Observable_subscribe(scheduler, options),
      Disposable.bindTo(subject),
    );

    return subject;
  };

export default Observable_multicast;
