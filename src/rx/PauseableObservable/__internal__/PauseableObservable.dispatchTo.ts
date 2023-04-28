import { partial, pipe } from "../../../functions.js";
import { DispatchTo, PauseableObservableLike } from "../../../rx.js";
import { DispatcherLike } from "../../../util.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_dispatchTo: DispatchTo<PauseableObservableLike>["dispatchTo"] =
  (<T>(dispatcher: DispatcherLike<T>) =>
    pipe(
      Observer_createDispatchToObserver,
      partial(dispatcher),
      PauseableObservable_lift,
    )) as DispatchTo<PauseableObservableLike>["dispatchTo"];

export default PauseableObservable_dispatchTo;
