[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / AbstractDelegatingSink

# Class: AbstractDelegatingSink<TA, TB\>

[runnable](../modules/runnable.md).AbstractDelegatingSink

## Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Implements

- [`SinkLike`](../interfaces/runnable.SinkLike.md)<`TA`\>

## Table of contents

### Constructors

- [constructor](runnable.AbstractDelegatingSink.md#constructor)

### Properties

- [delegate](runnable.AbstractDelegatingSink.md#delegate)

### Accessors

- [isDone](runnable.AbstractDelegatingSink.md#isdone)

### Methods

- [done](runnable.AbstractDelegatingSink.md#done)
- [notify](runnable.AbstractDelegatingSink.md#notify)

## Constructors

### constructor

• **new AbstractDelegatingSink**<`TA`, `TB`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`SinkLike`](../interfaces/runnable.SinkLike.md)<`TB`\> |

## Properties

### delegate

• `Readonly` **delegate**: [`SinkLike`](../interfaces/runnable.SinkLike.md)<`TB`\>

## Accessors

### isDone

• `get` **isDone**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[SinkLike](../interfaces/runnable.SinkLike.md).[isDone](../interfaces/runnable.SinkLike.md#isdone)

## Methods

### done

▸ **done**(): `void`

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/runnable.SinkLike.md).[done](../interfaces/runnable.SinkLike.md#done)

___

### notify

▸ `Abstract` **notify**(`next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `TA` |

#### Returns

`void`

#### Implementation of

[SinkLike](../interfaces/runnable.SinkLike.md).[notify](../interfaces/runnable.SinkLike.md#notify)
