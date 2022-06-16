[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObserverLike

# Interface: ObserverLike<T\>

[observable](../modules/observable.md).ObserverLike

The underlying mechanism for receiving and transforming notifications from an
observable source. The `ObserverLike` interface composes the `SchedulerLike` and
`DisposableLike` interfaces into a single unified type, while adding the capability
to receive notifications.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SinkLike`](sink.SinkLike.md)<`T`\>

- [`SchedulerLike`](scheduler.SchedulerLike.md)

  ↳ **`ObserverLike`**
