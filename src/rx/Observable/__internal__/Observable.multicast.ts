import { Function1, pipe } from "../../../functions";
import { MulticastObservableLike, ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo";
import Subject_create from "../../Subject/__internal__/Subject.create";
import Subject_publishTo from "../../Subject/__internal__/Subject.publishTo";
import Observable_forEach from "./Observable.forEach";
import Observable_subscribe from "./Observable.subscribe";

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
