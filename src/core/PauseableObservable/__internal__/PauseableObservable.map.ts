import { Container, PauseableObservableContainer } from "../../../core.js";
import { Function1, partial, pipe } from "../../../functions.js";
import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_map: Container.TypeClass<PauseableObservableContainer>["map"] =
  (<TA, TB>(selector: Function1<TA, TB>) =>
    pipe(
      Observer_createMapObserver,
      partial(selector),
      PauseableObservable_lift,
    )) as Container.TypeClass<PauseableObservableContainer>["map"];

export default PauseableObservable_map;
