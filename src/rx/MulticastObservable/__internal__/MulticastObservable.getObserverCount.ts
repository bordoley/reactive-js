import { MulticastObservableLike_observerCount } from "../../../rx.js";

const MulticastObservable_getObserverCount = (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => obs[MulticastObservableLike_observerCount];

export default MulticastObservable_getObserverCount;
