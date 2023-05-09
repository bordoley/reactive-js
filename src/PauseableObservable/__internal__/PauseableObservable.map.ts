import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { Containers, PauseableObservableContainer } from "../../containers.js";
import { Function1, partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_map: Containers.TypeClass<PauseableObservableContainer>["map"] =
  (<TA, TB>(selector: Function1<TA, TB>) =>
    pipe(
      Observer_createMapObserver,
      partial(selector),
      PauseableObservable_lift,
    )) as Containers.TypeClass<PauseableObservableContainer>["map"];

export default PauseableObservable_map;
