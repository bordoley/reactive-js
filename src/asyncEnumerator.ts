import { ContainerLike } from "./container";
import { DispatcherLike } from "./dispatcher";
import { AbtractDisposableLiftable } from "./liftable";
import { ObservableLike } from "./observable";
import { Observer } from "./observer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

export abstract class AsyncEnumerator<T>
  extends AbtractDisposableLiftable<Observer<T>>
  implements ContainerLike, StreamLike<void, T>
{
  abstract scheduler: SchedulerLike;
  abstract observerCount: number;
  abstract replay: number;

  isEnumerable?: false = false;

  abstract dispatch(this: DispatcherLike<void>, req: void): void;
  abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}
