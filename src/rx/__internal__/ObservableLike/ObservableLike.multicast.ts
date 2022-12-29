import { Function1, pipe } from "../../../functions";
import { MulticastObservableLike, ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import DisposableLike__bindTo from "../../../util/__internal__/DisposableLike/DisposableLike.bindTo";
import { forEach } from "../../ObservableLike";
import SubjectLike__create from "../SubjectLike/SubjectLike.create";
import SubjectLike__publishTo from "../SubjectLike/SubjectLike.publishTo";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const multicast =
  <T>(
    scheduler: SchedulerLike,
    options: { readonly replay?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { replay = 0 } = options;
    const subject = SubjectLike__create({ replay });
    pipe(
      observable,
      forEach<T>(SubjectLike__publishTo(subject)),
      ObservableLike__subscribe(scheduler),
      DisposableLike__bindTo(subject),
    );

    return subject;
  };

export default multicast;
