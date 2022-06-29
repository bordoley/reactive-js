[Reactive-JS](../README.md) / [dispatcher](../modules/dispatcher.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[dispatcher](../modules/dispatcher.md).DispatcherLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`DispatcherLike`**

  ↳↳ [`SubjectLike`](observable.SubjectLike.md)

  ↳↳ [`StreamLike`](streamable.StreamLike.md)

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
