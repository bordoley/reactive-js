import { ContainerLike } from "./container";
import { DispatcherLike } from "./dispatcher";
import { Disposable } from "./disposable";
import { raise } from "./functions";
import { ObservableLike } from "./observable";
import { Observer } from "./observer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

export abstract class AsyncEnumerator<T>
  extends Disposable
  implements ContainerLike, StreamLike<void, T>
{
  get T(): T {
    return raise();
  }

  get TContainerOf(): this {
    return this;
  }

  get TLiftableState(): Observer<this["T"]> {
    return raise();
  }

  abstract scheduler: SchedulerLike;
  abstract observerCount: number;
  abstract replay: number;

  isEnumerable?: false = false;

  abstract dispatch(this: DispatcherLike<void>, req: void): void;
  abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}
