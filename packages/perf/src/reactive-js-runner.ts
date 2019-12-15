import { subscribe, ObservableLike } from "@reactive-js/rx";
import { createSynchronousSchedulerResource } from "@reactive-js/schedulers";
import { pipe } from '@reactive-js/pipe';
import { onNext } from "@reactive-js/observable";

export const run = <T>(observable: ObservableLike<T>) => {
  // FIXME: We aren't using the iterate function because
  // it's exception handling skews the results in a few cases.
  const scheduler = createSynchronousSchedulerResource();
  pipe(observable, onNext(_ => {}), subscribe(scheduler));
  scheduler.run();
};
