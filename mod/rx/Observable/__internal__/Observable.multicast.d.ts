import { Factory, Function1, Optional } from "../../../functions.js";
import { MulticastObservableLike, ObservableLike, PublisherLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_multicast: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>, options?: {
    readonly replay?: number | undefined;
    readonly capacity?: number | undefined;
    publisherFactory?: Function1<Optional<{
        replay?: number | undefined;
    }>, PublisherLike<T>> | undefined;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
export default Observable_multicast;
