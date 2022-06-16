[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / SinkLike

# Interface: SinkLike<T\>

[runnable](../modules/runnable.md).SinkLike

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`AbstractDelegatingSink`](../classes/runnable.AbstractDelegatingSink.md)

## Table of contents

### Properties

- [isDone](runnable.SinkLike.md#isdone)

### Methods

- [done](runnable.SinkLike.md#done)
- [notify](runnable.SinkLike.md#notify)

## Properties

### isDone

• `Readonly` **isDone**: `boolean`

## Methods

### done

▸ **done**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](runnable.SinkLike.md)<`T`\> |

#### Returns

`void`

___

### notify

▸ **notify**(`this`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](runnable.SinkLike.md)<`T`\> |
| `next` | `T` |

#### Returns

`void`
