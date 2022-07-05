import { AbstractReactiveContainer } from "../__internal__.reactive";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";

export abstract class AbstractObservable<T>
  extends AbstractReactiveContainer<T, Observer<T>>
  implements ObservableLike<T> {}

export const isEnumerable = (obs: ObservableLike<unknown>) =>
  obs.isEnumerable ?? false;

export const tagEnumerable =
  <T>(isEnumerable: boolean) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    (obs as any).isEnumerable = isEnumerable;
    return obs;
  };
