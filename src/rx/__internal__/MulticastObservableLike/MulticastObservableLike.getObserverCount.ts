import { MulticastObservableLike_observerCount } from "../../../rx";

const getObserverCount = (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => obs[MulticastObservableLike_observerCount];

export default getObserverCount;
