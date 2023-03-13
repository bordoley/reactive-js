[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObserverLike

# Interface: ObserverLike<T\>

[rx](../modules/rx.md).ObserverLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DispatcherLike`](rx.DispatcherLike.md)<`T`\>

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`ObserverLike`**

## Table of contents

### Methods

- [[ObserverLike\_notify]](rx.ObserverLike.md#[observerlike_notify])

## Methods

### [ObserverLike\_notify]

▸ **[ObserverLike_notify]**(`next`): `void`

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | `T` | The next notification value. |

#### Returns

`void`
