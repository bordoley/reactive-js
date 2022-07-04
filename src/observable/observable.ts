import { AbstractReactiveSource } from "../__internal__.reactive";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";

export abstract class AbstractObservable<T>
  extends AbstractReactiveSource<T, Observer<T>>
  implements ObservableLike<T> {}

export const isEnumerable = (obs: ObservableLike<unknown>) =>
  obs.isEnumerable ?? false;

export const tagEnumerable =
  <T>(isEnumerable: boolean) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    (obs as any).isEnumerable = isEnumerable;
    return obs;
  };
