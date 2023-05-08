[Reactive-JS](../README.md) / [core](../modules/core.md) / ObserverLike

# Interface: ObserverLike<T\>

[core](../modules/core.md).ObserverLike

A consumer of push-based notifications.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DispatcherLike`](core.DispatcherLike.md)<`T`\>

- [`DisposableLike`](core.DisposableLike.md)

- [`SchedulerLike`](core.SchedulerLike.md)

  ↳ **`ObserverLike`**

## Table of contents

### Methods

- [[\_\_\_ObserverLike\_notify]](core.ObserverLike.md#[___observerlike_notify])

## Methods

### [\_\_\_ObserverLike\_notify]

▸ **[___ObserverLike_notify]**(`next`): `void`

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | `T` | The next notification value. |

#### Returns

`void`
