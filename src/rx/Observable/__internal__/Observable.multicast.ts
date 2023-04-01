import { Factory, Function1 } from "../../../functions.js";
import { MulticastObservableLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";

const Observable_multicast = <T>(
  schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>,
  options: {
    readonly replay?: number;
    readonly capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  } = {},
): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  Observable_multicastImpl<T>(Publisher_create, schedulerOrFactory, options);

export default Observable_multicast;
