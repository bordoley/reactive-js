import { MulticastObservableLike_replay } from "../../../rx";

const MulticastObservableLike__getReplay = (obs: {
  [MulticastObservableLike_replay]: number;
}) => obs[MulticastObservableLike_replay];

export default MulticastObservableLike__getReplay;
