import { MulticastObservableLike_replay } from "../../../rx";

const MulticastObservable$getReplay = (obs: {
  [MulticastObservableLike_replay]: number;
}) => obs[MulticastObservableLike_replay];

export default MulticastObservable$getReplay;
