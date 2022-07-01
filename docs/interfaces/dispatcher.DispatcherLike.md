[Reactive-JS](../README.md) / [dispatcher](../modules/dispatcher.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[dispatcher](../modules/dispatcher.md).DispatcherLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

  ↳ **`DispatcherLike`**

  ↳↳ [`StreamLike`](stream.StreamLike.md)

## Table of contents

### Properties

- [scheduler](dispatcher.DispatcherLike.md#scheduler)

### Methods

- [dispatch](dispatcher.DispatcherLike.md#dispatch)

## Properties

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](scheduler.SchedulerLike.md)

## Methods

### dispatch

▸ **dispatch**(`this`, `req`): `void`

Dispatches the next request

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DispatcherLike`](dispatcher.DispatcherLike.md)<`T`\> |
| `req` | `T` |

#### Returns

`void`
