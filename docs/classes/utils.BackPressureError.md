[Reactive-JS](../README.md) / [utils](../modules/utils.md) / BackPressureError

# Class: BackPressureError

[utils](../modules/utils.md).BackPressureError

## Hierarchy

- `Error`

  ↳ **`BackPressureError`**

## Table of contents

### Constructors

- [constructor](utils.BackPressureError.md#constructor)

### Properties

- [[QueueableLike\_backpressureStrategy]](utils.BackPressureError.md#[queueablelike_backpressurestrategy])
- [[QueueableLike\_capacity]](utils.BackPressureError.md#[queueablelike_capacity])

## Constructors

### constructor

• **new BackPressureError**(`capacity`, `backpressureStrategy`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Overrides

Error.constructor

## Properties

### [QueueableLike\_backpressureStrategy]

• `Readonly` **[QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

___

### [QueueableLike\_capacity]

• `Readonly` **[QueueableLike\_capacity]**: `number`
