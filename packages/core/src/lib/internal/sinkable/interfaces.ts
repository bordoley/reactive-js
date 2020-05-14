/**
 * The underlying mechanism for receiving and transforming notifications from an
 * observable source. The `ObserverLike` interface composes the `SchedulerLike` and
 * `DisposableLike` interfaces into a single unified type, while adding the capability
 * to receive notifications.
 *
 * @noInheritDoc
 */
export interface SinkLike<T> {
  readonly isDone: boolean

  push(next: T): void;
  done(): void
}

export interface Sinkable<T> {
  sink(sink: SinkLike<T>): void;
}