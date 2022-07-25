import { ObservableLike, ObservableLike_observableType } from "../rx";

export const getObservableType = (obs: ObservableLike): 0 | 1 | 2 =>
  obs[ObservableLike_observableType];
