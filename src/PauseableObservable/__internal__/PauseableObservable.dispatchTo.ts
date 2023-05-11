import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { partial, pipe } from "../../functions.js";
import { DispatcherLike } from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_dispatchTo: PauseableObservable.Signature["dispatchTo"] =
  (<T>(dispatcher: DispatcherLike<T>) =>
    pipe(
      Observer_createDispatchToObserver,
      partial(dispatcher),
      PauseableObservable_lift,
    )) as PauseableObservable.Signature["dispatchTo"];

export default PauseableObservable_dispatchTo;
