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

▸ **done**(): `void`

#### Returns

`void`

___

### notify

▸ **notify**(`next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `T` |

#### Returns

`void`
