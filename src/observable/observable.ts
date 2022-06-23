import { ObservableLike } from "../observable";
import { AbstractSource } from "../source";
import { Observer } from "./observer";

export abstract class AbstractObservable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T> {}
