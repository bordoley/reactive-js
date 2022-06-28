import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { AbstractDisposableSource, AbstractSource } from "../source";

export abstract class AbstractObservable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T> {}

export abstract class AbstractDisposableObservable<T>
  extends AbstractDisposableSource<T, Observer<T>>
  implements ObservableLike<T> {}

export const isEnumerable = <T>(obs: ObservableLike<T>) =>
  obs.isEnumerable ?? false;
