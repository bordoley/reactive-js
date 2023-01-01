import { Function1, pipe } from "../../../functions";
import { MulticastObservableLike, ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import DisposableLike__bindTo from "../../../util/__internal__/DisposableLike/DisposableLike.bindTo";
import SubjectLike__create from "../SubjectLike/SubjectLike.create";
import SubjectLike__publishTo from "../SubjectLike/SubjectLike.publishTo";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__multicast =
  <T>(
    scheduler: SchedulerLike,
    options: { readonly replay?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { replay = 0 } = options;
    const subject = SubjectLike__create({ replay });
    pipe(
      observable,
      ObservableLike__forEach<T>(SubjectLike__publishTo(subject)),
      ObservableLike__subscribe(scheduler),
      DisposableLike__bindTo(subject),
    );

    return subject;
  };

export default ObservableLike__multicast;
