import {
  DeferredObservableLike,
  DisposableLike,
  MulticastObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../core.js";
import { Factory, Function1 } from "../../../functions.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
import Observable_multicastImpl from "./DeferredObservable.multicastImpl.js";

const DeferredObservable_multicast = <T>(
  schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
  options: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  } = {},
): Function1<
  DeferredObservableLike<T>,
  MulticastObservableLike<T> & DisposableLike
> => Observable_multicastImpl<T>(Publisher_create, schedulerOrFactory, options);

export default DeferredObservable_multicast;
