import { MulticastObservableLike_observerCount } from "../../../rx";

const MulticastObservable$getObserverCount = (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => obs[MulticastObservableLike_observerCount];

export default MulticastObservable$getObserverCount;
