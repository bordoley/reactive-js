import { MulticastObservableLike_replay } from "../../../rx";

const getReplay = (obs: { [MulticastObservableLike_replay]: number }) =>
  obs[MulticastObservableLike_replay];

export default getReplay;
