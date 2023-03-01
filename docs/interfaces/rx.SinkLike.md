[Reactive-JS](../README.md) / [rx](../modules/rx.md) / SinkLike

# Interface: SinkLike<T\>

[rx](../modules/rx.md).SinkLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`SinkLike`**

  ↳↳ [`ObserverLike`](rx.ObserverLike.md)

## Table of contents

### Methods

- [[ObserverLike\_notify]](rx.SinkLike.md#[observerlike_notify])

## Methods

### [ObserverLike\_notify]

▸ **[ObserverLike_notify]**(`next`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | `T` | The next notification value. |

#### Returns

`void`
