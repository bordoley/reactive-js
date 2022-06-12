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

- [`DisposableLike`](disposable.DisposableLike.md)

- [`SchedulerLike`](scheduler.SchedulerLike.md)

  ↳ **`ObserverLike`**

## Table of contents

### Methods

- [notify](observable.ObserverLike.md#notify)

## Methods

### notify

▸ **notify**(`next`): `void`

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | `T` | The next notification value. |

#### Returns

`void`
