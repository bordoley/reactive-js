import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers.js";
import { Function1, isSome, pipe, raiseError } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import VirtualTimeScheduler_create from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.js";
import VirtualTimeScheduler_run from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.run.js";
import Disposable_getError from "../../../util/Disposable/__internal__/Disposable.getError.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";

const Runnable_toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =

    <T>(): Function1<RunnableLike<T>, ReadonlyArrayLike<T>> =>
    observable => {
      const scheduler = VirtualTimeScheduler_create();
      const result: T[] = [];

      const subscription = pipe(
        observable,
        Observable_forEach<T>(next => {
          result.push(next);
        }),
        Observable_subscribe(scheduler),
      );

      VirtualTimeScheduler_run(scheduler);
      const error = Disposable_getError(subscription);

      return isSome(error) ? raiseError<T[]>(error) : result;
    };

export default Runnable_toReadonlyArray;
