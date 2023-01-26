import { Function1, pipe } from "../../../functions";
import { MulticastObservableLike, ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Disposable$bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Subject$create from "../Subject/Subject.create";
import Subject$publishTo from "../Subject/Subject.publishTo";
import Observable$forEach from "./Observable.forEach";
import Observable$subscribe from "./Observable.subscribe";

const Observable$multicast =
  <T>(
    scheduler: SchedulerLike,
    options: { readonly replay?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { replay = 0 } = options;
    const subject = Subject$create({ replay });
    pipe(
      observable,
      Observable$forEach<T>(Subject$publishTo(subject)),
      Observable$subscribe(scheduler),
      Disposable$bindTo(subject),
    );

    return subject;
  };

export default Observable$multicast;
