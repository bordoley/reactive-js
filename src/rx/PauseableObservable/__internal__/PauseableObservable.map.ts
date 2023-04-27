import { Map } from "../../../containers.js";
import { Function1, partial, pipe } from "../../../functions.js";
import { PauseableObservableLike } from "../../../rx.js";
import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_map: Map<PauseableObservableLike>["map"] = (<TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    Observer_createMapObserver,
    partial(selector),
    PauseableObservable_lift,
  )) as Map<PauseableObservableLike>["map"];

export default PauseableObservable_map;
