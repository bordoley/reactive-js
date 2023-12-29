import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
  SchedulerLike,
  SubjectLike,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { Function1, Optional, bindMethod, pipe } from "../../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_multicastImpl =
  <T>(
    subjectFactory: Function1<
      Optional<{
        replay?: number;
      }>,
      SubjectLike<T>
    >,
    scheduler: SchedulerLike,
    options: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    } = {},
  ): Function1<
    DeferredObservableLike<T>,
    MulticastObservableLike<T> & DisposableLike
  > =>
  observable => {
    const {
      backpressureStrategy = "overflow",
      capacity = MAX_SAFE_INTEGER,
      replay = 0,
    } = options;
    const subject = subjectFactory({ replay });

    pipe(
      observable,
      Observable_forEach(bindMethod(subject, SinkLike_notify)),
      Observable_subscribeWithConfig(scheduler, {
        [QueueableLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
      }),
      Disposable.bindTo(subject),
    );

    return subject;
  };

export default Observable_multicastImpl;
