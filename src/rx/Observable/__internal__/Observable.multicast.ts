import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  Factory,
  Function1,
  bindMethod,
  isFunction,
  pipe,
} from "../../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike,
  SubjectLike_publish,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithCapacity from "./Observable.subscribeWithCapacity.js";

const Observable_multicast =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>,
    options: { readonly replay?: number; readonly capacity?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { capacity = MAX_SAFE_INTEGER, replay = 0 } = options;
    const subject = Subject_create({ replay });

    const scheduler = isFunction(schedulerOrFactory)
      ? pipe(schedulerOrFactory(), Disposable_addTo(subject))
      : schedulerOrFactory;

    pipe(
      observable,
      Observable_forEach<ObservableLike, T>(
        bindMethod(subject, SubjectLike_publish),
      ),
      Observable_subscribeWithCapacity(scheduler, capacity),
      Disposable_bindTo(subject),
    );

    return subject;
  };

export default Observable_multicast;
