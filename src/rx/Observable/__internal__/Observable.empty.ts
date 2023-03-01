import { pipe, pipeLazy } from "../../../functions.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";

const Observable_empty = <T>(options?: { delay: number }) =>
  hasDelay(options)
    ? Runnable_create<T>(observer => {
        pipe(
          observer,
          Observer_schedule(pipeLazy(observer, Disposable_dispose()), options),
        );
      })
    : Enumerable_create<T>(observer => {
        pipe(observer, Disposable_dispose());
      });

export default Observable_empty;
