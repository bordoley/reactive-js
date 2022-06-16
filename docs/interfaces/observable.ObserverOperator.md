[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObserverOperator

# Interface: ObserverOperator<A, B\>

[observable](../modules/observable.md).ObserverOperator

## Type parameters

| Name |
| :------ |
| `A` |
| `B` |

## Callable

### ObserverOperator

▸ **ObserverOperator**(`observer`): [`ObserverLike`](observable.ObserverLike.md)<`A`\>

A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](observable.ObserverLike.md)<`B`\> |

#### Returns

[`ObserverLike`](observable.ObserverLike.md)<`A`\>

## Table of contents

### Properties

- [isSynchronous](observable.ObserverOperator.md#issynchronous)

## Properties

### isSynchronous

• `Readonly` **isSynchronous**: `boolean`
