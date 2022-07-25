[Reactive-JS](../README.md) / util

# Module: util

## Table of contents

### Interfaces

- [ContinuationLike](../interfaces/util.ContinuationLike.md)
- [DisposableLike](../interfaces/util.DisposableLike.md)
- [PauseableLike](../interfaces/util.PauseableLike.md)

### Type Aliases

- [DisposableOrTeardown](util.md#disposableorteardown)
- [Error](util.md#error)

### Variables

- [ContinuationLike\_run](util.md#continuationlike_run)
- [DisposableLike\_add](util.md#disposablelike_add)
- [DisposableLike\_dispose](util.md#disposablelike_dispose)
- [DisposableLike\_error](util.md#disposablelike_error)
- [DisposableLike\_isDisposed](util.md#disposablelike_isdisposed)
- [PauseableLike\_pause](util.md#pauseablelike_pause)
- [PauseableLike\_resume](util.md#pauseablelike_resume)

## Type Aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [`DisposableLike`](../interfaces/util.DisposableLike.md) \| [`SideEffect1`](functions.md#sideeffect1)<[`Option`](functions.md#option)<[`Error`](util.md#error)\>\>

___

### Error

Ƭ **Error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cause` | `unknown` |

## Variables

### ContinuationLike\_run

• `Const` **ContinuationLike\_run**: unique `symbol`

___

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
