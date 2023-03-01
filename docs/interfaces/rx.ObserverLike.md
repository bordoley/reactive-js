[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObserverLike

# Interface: ObserverLike<T\>

[rx](../modules/rx.md).ObserverLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`ObserverLike`**

## Table of contents

### Properties

- [[ObserverLike\_dispatcher]](rx.ObserverLike.md#[observerlike_dispatcher])
- [[ObserverLike\_scheduler]](rx.ObserverLike.md#[observerlike_scheduler])

### Methods

- [[ObserverLike\_notify]](rx.ObserverLike.md#[observerlike_notify])

## Properties

### [ObserverLike\_dispatcher]

• `Readonly` **[ObserverLike\_dispatcher]**: [`DispatcherLike`](scheduling.DispatcherLike.md)<`T`\>

___

### [ObserverLike\_scheduler]

• `Readonly` **[ObserverLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)

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
