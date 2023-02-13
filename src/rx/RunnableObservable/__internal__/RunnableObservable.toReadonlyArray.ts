import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import { Function1, isSome, pipe, raiseError } from "../../../functions";
import { RunnableObservableLike } from "../../../rx";
import Continuation_run from "../../../scheduling/Continuation/__internal__/Continuation.run";
import VirtualTimeScheduler_create from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create";
import Disposable_getError from "../../../util/Disposable/__internal__/Disposable.getError";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe";

const RunnableObservable_toReadonlyArray: ToReadonlyArray<RunnableObservableLike>["toReadonlyArray"] =

    <T>(): Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>> =>
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

      Continuation_run(scheduler);
      const error = Disposable_getError(subscription);

      return isSome(error) ? raiseError<T[]>(error) : result;
    };

export default RunnableObservable_toReadonlyArray;
