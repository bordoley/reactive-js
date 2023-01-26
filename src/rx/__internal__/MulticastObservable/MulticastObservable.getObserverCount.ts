import { MulticastObservableLike_observerCount } from "../../../rx";

const MulticastObservable_getObserverCount = (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => obs[MulticastObservableLike_observerCount];

export default MulticastObservable_getObserverCount;
