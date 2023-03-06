import { isSome, pipe, raiseError } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import VirtualTimeScheduler_create from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.js";
import VirtualTimeScheduler_run from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.run.js";
import { DisposableLike_error } from "../../../util.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";

const Runnable_run =
  <T>() =>
  (observable: RunnableLike<T>) => {
    const scheduler = VirtualTimeScheduler_create();

    const subscription = pipe(observable, Observable_subscribe(scheduler));

    VirtualTimeScheduler_run(scheduler);
    const error = subscription[DisposableLike_error];

    if (isSome(error)) {
      raiseError<T[]>(error);
    }
  };

export default Runnable_run;
