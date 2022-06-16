[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / AbstractDelegatingSink

# Class: AbstractDelegatingSink<TA, TB\>

[runnable](../modules/runnable.md).AbstractDelegatingSink

## Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Hierarchy

- `AbstractSink`<`TA`\>

  ↳ **`AbstractDelegatingSink`**

## Table of contents

### Constructors

- [constructor](runnable.AbstractDelegatingSink.md#constructor)

### Properties

- [delegate](runnable.AbstractDelegatingSink.md#delegate)

### Methods

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

#### Overrides

AbstractSink&lt;TA\&gt;.constructor

## Properties

### delegate

• `Readonly` **delegate**: [`SinkLike`](../interfaces/runnable.SinkLike.md)<`TB`\>

## Methods

### notify

▸ `Abstract` **notify**(`next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `TA` |

#### Returns

`void`

#### Inherited from

AbstractSink.notify
