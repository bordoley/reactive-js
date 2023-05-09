import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { PauseableObservableContainer } from "../../containers.js";
import { Function1, partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_map: PauseableObservableContainer.TypeClass["map"] =
  (<TA, TB>(selector: Function1<TA, TB>) =>
    pipe(
      Observer_createMapObserver,
      partial(selector),
      PauseableObservable_lift,
    )) as PauseableObservableContainer.TypeClass["map"];

export default PauseableObservable_map;
