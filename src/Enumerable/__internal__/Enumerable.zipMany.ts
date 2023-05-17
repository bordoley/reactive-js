import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerator_zipMany from "../../Enumerator/__internal__/Enumerator.zipMany.js";
import ReadonlyArray_forEach from "../../ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";

import { pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  EnumerableLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  ObserverLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
  SinkLike_notify,
} from "../../types.js";

const Enumerable_zipMany = (observables: readonly EnumerableLike<unknown>[]) =>
  Enumerable_create((observer: ObserverLike<ReadonlyArray<unknown>>) => {
    const enumerators = pipe(
      observables,
      ReadonlyArray_map(Enumerable_enumerate()),
      ReadonlyArray_forEach(Disposable_addTo(observer)),
    );

    const enumerator = Enumerator_zipMany(enumerators);

    const continuation = (scheduler: SchedulerLike) => {
      while (enumerator[EnumeratorLike_move]()) {
        observer[SinkLike_notify](enumerator[EnumeratorLike_current]);
        scheduler[SchedulerLike_yield]();
      }
      observer[DisposableLike_dispose]();
    };

    pipe(
      observer[SchedulerLike_schedule](continuation),
      Disposable_addTo(observer),
    );
  });

export default Enumerable_zipMany;
