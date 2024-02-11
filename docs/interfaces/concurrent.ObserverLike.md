[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / ObserverLike

# Interface: ObserverLike\<T\>

[concurrent](../modules/concurrent.md).ObserverLike

A consumer of push-based notifications.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DispatcherLike`](concurrent.DispatcherLike.md)\<`T`\>

- [`SchedulerLike`](concurrent.SchedulerLike.md)

  ↳ **`ObserverLike`**

## Table of contents

### Methods

- [[ObserverLike\_notify]](concurrent.ObserverLike.md#[observerlike_notify])

## Methods

### [ObserverLike\_notify]

▸ **[ObserverLike_notify]**(`event`): `void`

Notifies the observer of the next notification produced by the source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

`void`
