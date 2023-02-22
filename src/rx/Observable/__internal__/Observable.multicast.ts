import { Function1, pipe } from "../../../functions.js";
import { MulticastObservableLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../Subject/__internal__/Subject.publishTo.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_multicast =
  <T>(
    scheduler: SchedulerLike,
    options: { readonly replay?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { replay = 0 } = options;
    const subject = Subject_create({ replay });
    pipe(
      observable,
      Observable_forEach<T>(Subject_publishTo(subject)),
      Observable_subscribe(scheduler),
      Disposable_bindTo(subject),
    );

    return subject;
  };

export default Observable_multicast;
