import { MulticastObservableLike_replay } from "../../../rx";

const MulticastObservable_getReplay = (obs: {
  [MulticastObservableLike_replay]: number;
}) => obs[MulticastObservableLike_replay];

export default MulticastObservable_getReplay;
