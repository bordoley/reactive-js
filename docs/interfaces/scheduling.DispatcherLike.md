[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[scheduling](../modules/scheduling.md).DispatcherLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`DispatcherLike`**

  ↳↳ [`PauseableLike`](scheduling.PauseableLike.md)

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Properties

- [[DispatcherLike\_scheduler]](scheduling.DispatcherLike.md#[dispatcherlike_scheduler])

### Methods

- [[DispatcherLike\_dispatch]](scheduling.DispatcherLike.md#[dispatcherlike_dispatch])

## Properties

### [DispatcherLike\_scheduler]

• `Readonly` **[DispatcherLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)

## Methods

### [DispatcherLike\_dispatch]

▸ **[DispatcherLike_dispatch]**(`req`): `void`

Dispatches the next request

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `T` |

#### Returns

`void`
