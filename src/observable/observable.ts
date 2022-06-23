import { ObservableLike } from "../observable";
import { AbstractDisposableSource, AbstractSource } from "../source";
import { Observer } from "./observer";

export abstract class AbstractObservable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T> {}

export abstract class AbstractDisposableObservable<T>
  extends AbstractDisposableSource<T, Observer<T>>
  implements ObservableLike<T> {}
