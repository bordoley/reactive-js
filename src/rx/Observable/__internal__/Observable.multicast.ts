import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { Function1, pipe } from "../../../functions.js";
import { MulticastObservableLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../Subject/__internal__/Subject.publishTo.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "./Observable.subscribeWithMaxBufferSize.js";

const Observable_multicast =
  <T>(
    scheduler: SchedulerLike,
    options: { readonly replay?: number; readonly maxBufferSize?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options;
    const subject = Subject_create({ replay });
    pipe(
      observable,
      Observable_forEach<ObservableLike, T>(Subject_publishTo(subject)),
      Observable_subscribeWithMaxBufferSize(scheduler, maxBufferSize),
      Disposable_bindTo(subject),
    );

    return subject;
  };

export default Observable_multicast;
