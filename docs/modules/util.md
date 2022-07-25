[Reactive-JS](../README.md) / util

# Module: util

## Table of contents

### Interfaces

- [DisposableLike](../interfaces/util.DisposableLike.md)
- [PauseableLike](../interfaces/util.PauseableLike.md)

### Type Aliases

- [DisposableOrTeardown](util.md#disposableorteardown)
- [Error](util.md#error)
- [Option](util.md#option)

### Variables

- [DisposableLike\_add](util.md#disposablelike_add)
- [DisposableLike\_dispose](util.md#disposablelike_dispose)
- [DisposableLike\_error](util.md#disposablelike_error)
- [DisposableLike\_isDisposed](util.md#disposablelike_isdisposed)
- [PauseableLike\_pause](util.md#pauseablelike_pause)
- [PauseableLike\_resume](util.md#pauseablelike_resume)

## Type Aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [`DisposableLike`](../interfaces/util.DisposableLike.md) \| [`SideEffect1`](functions.md#sideeffect1)<[`Option`](util.md#option)<[`Error`](util.md#error)\>\>

___

### Error

Ƭ **Error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cause` | `unknown` |

___

### Option

Ƭ **Option**<`T`\>: `T` \| `undefined`

Represents an unboxed value of type T or undefined.

#### Type parameters

| Name |
| :------ |
| `T` |

## Variables

### DisposableLike\_add

• `Const` **DisposableLike\_add**: unique `symbol`

___

### DisposableLike\_dispose

• `Const` **DisposableLike\_dispose**: unique `symbol`

___

### DisposableLike\_error

• `Const` **DisposableLike\_error**: unique `symbol`

___

### DisposableLike\_isDisposed

• `Const` **DisposableLike\_isDisposed**: unique `symbol`

___

### PauseableLike\_pause

• `Const` **PauseableLike\_pause**: unique `symbol`

___

### PauseableLike\_resume

• `Const` **PauseableLike\_resume**: unique `symbol`
