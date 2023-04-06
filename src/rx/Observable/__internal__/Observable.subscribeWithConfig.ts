import { Function1, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  BufferLike_capacity,
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Observable_subscribeWithConfig =
  <T>(config: {
    [DispatcherLike_scheduler]: SchedulerLike;
    [BufferLike_capacity]: number;
    [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }): Function1<ObservableLike<T>, DisposableLike> =>
  observable =>
    pipe(
      Observer_create(
        config[DispatcherLike_scheduler],
        config[BufferLike_capacity],
        config[QueueableLike_backpressureStrategy],
      ),
      Disposable_addToIgnoringChildErrors(config[DispatcherLike_scheduler]),
      sourceFrom(observable),
    );

export default Observable_subscribeWithConfig;
