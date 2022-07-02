import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { AbstractSource, DisposableSource } from "../source";

export abstract class AbstractObservable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T> {}

export abstract class AbstractDisposableObservable<T>
  extends DisposableSource<T, Observer<T>>
  implements ObservableLike<T> {}

export const isEnumerable = (obs: ObservableLike<unknown>) =>
  obs.isEnumerable ?? false;

export const tagEnumerable =
  <T>(isEnumerable: boolean) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    (obs as any).isEnumerable = isEnumerable;
    return obs;
  };
