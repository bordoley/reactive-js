import { onDestroy, onMount } from "svelte";
import { writable, Readable, Writable } from "svelte/store";
import { dispose } from "../disposable";
import { Function1, Factory, pipe, defer, SideEffect1 } from "../functions";
import {
  ObservableLike,
  subscribe as subscribeObs,
  StreamLike,
} from "../observable";
import { Option, none, isSome } from "../option";
import { SchedulerLike } from "../scheduler";
import {
  StreamableLike,
  onNotify,
  stream as streamableStream,
} from "../streamable";

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

export const stream = <TReq, T>(
  scheduler: SchedulerLike,
  options: {
    replay?: number;
  } = {},
): Function1<
  StreamableLike<TReq, T>,
  [Readable<Option<T>>, SideEffect1<TReq>]
> => streamable => {
  const store: Writable<Option<T>> = writable(none);
  const liftedStreamable = pipe(
    streamable,
    onNotify(v => store.set(v)),
  );

  let stream: Option<StreamLike<TReq, T>> = none;

  onMount(() => {
    stream = pipe(liftedStreamable, streamableStream(scheduler, options));
  });

  onDestroy(() => {
    if (isSome(stream)) {
      pipe(stream, dispose());
    }
  });

  const dispatch = (req: TReq) => {
    if (isSome(stream)) {
      stream.dispatch(req);
    }
  };

  return [store, dispatch];
};
