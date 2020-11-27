import { Readable } from "svelte/store";
import { dispose } from "./disposable";
import { Factory, Function1, defer, pipe } from "./functions";
import {
  ObservableLike,
  onNotify,
  subscribe as subscribeObs,
} from "./observable";
import { Option, none } from "./option";
import { SchedulerLike } from "./scheduler";

class ObservableSvelteStore<T> implements Readable<Option<T>> {
  constructor(
    private readonly observable: ObservableLike<T>,
    private readonly scheduler: SchedulerLike,
  ) {}

  subscribe(callback: (next: Option<T>) => void): Factory<void> {
    callback(none);
    const subscription = pipe(
      this.observable,
      onNotify(callback),
      subscribeObs(this.scheduler),
    );

    return defer(subscription, dispose);
  }
}

export const subscribe = <T>(
  scheduler: SchedulerLike,
): Function1<ObservableLike<T>, Readable<Option<T>>> => obs =>
  new ObservableSvelteStore(obs, scheduler);
