import { MulticastObservableLike_replay } from "../../../rx.js";

const MulticastObservable_getReplay = (obs: {
  [MulticastObservableLike_replay]: number;
}) => obs[MulticastObservableLike_replay];

export default MulticastObservable_getReplay;
