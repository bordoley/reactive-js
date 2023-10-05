import { ObserverLike, PauseableObservableLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
declare const PauseableObservable_lift: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => Function1<PauseableObservableLike<TA>, PauseableObservableLike<TB>>;
export default PauseableObservable_lift;
