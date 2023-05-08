import {
  Containers,
  DispatcherLike_complete,
  EventSourceContainer,
  EventSourceLike,
  QueueableLike_enqueue,
} from "../../../core.js";
import Observable_create from "../../../core/Observable/__internal__/Observable.create.js";
import { bindMethod, pipe } from "../../../functions.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_toObservable: Containers.TypeClass<EventSourceContainer>["toObservable"] =

    <T>() =>
    (eventSource: EventSourceLike<T>) =>
      Observable_create<T>(observer => {
        pipe(
          eventSource,
          EventSource_addEventHandler(
            bindMethod(observer, QueueableLike_enqueue),
          ),
          Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)),
          Disposable_addTo(observer),
        );
      });

export default EventSource_toObservable;
