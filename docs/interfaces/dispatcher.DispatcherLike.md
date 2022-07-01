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

## Implemented by

- [`Subject`](../classes/observable.Subject.md)

## Table of contents

### Methods

- [dispatch](dispatcher.DispatcherLike.md#dispatch)

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
