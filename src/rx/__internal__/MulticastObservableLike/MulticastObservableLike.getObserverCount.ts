import { MulticastObservableLike_observerCount } from "../../../rx";

const MulticastObservableLike__getObserverCount = (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => obs[MulticastObservableLike_observerCount];

export default MulticastObservableLike__getObserverCount;
