import { DispatcherLike, dispatch } from "./dispatcher";
import { Disposable } from "./disposable";
import { pipe, raise } from "./functions";
import { InteractiveSourceLike } from "./interactiveSource";
import { DefaultObservable, ObservableLike } from "./observable";
import { Observer } from "./observer";
import { none } from "./option";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

export abstract class AsyncEnumerator<T>
  extends Disposable
  implements InteractiveSourceLike, StreamLike<void, T>
{
  get T(): T {
    return raise();
  }

  get TContainerOf(): this {
    return this;
  }

  get TLiftableContainerState(): Observer<this["T"]> {
    return raise();
  }

  readonly observableType: DefaultObservable = 0;

  abstract scheduler: SchedulerLike;
  abstract observerCount: number;
  abstract replay: number;

  abstract dispatch(this: DispatcherLike<void>, req: void): void;
  abstract sinkInto(this: ObservableLike<T>, sink: Observer<T>): void;

  move(): void {
    pipe(this, dispatch(none));
  }
}
