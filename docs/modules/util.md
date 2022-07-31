[Reactive-JS](../README.md) / util

# Module: util

## Table of contents

### Interfaces

- [ContinuationLike](../interfaces/util.ContinuationLike.md)
- [DisposableLike](../interfaces/util.DisposableLike.md)
- [EnumeratorLike](../interfaces/util.EnumeratorLike.md)
- [PauseableLike](../interfaces/util.PauseableLike.md)
- [SinkLike](../interfaces/util.SinkLike.md)
- [SourceLike](../interfaces/util.SourceLike.md)

### Type Aliases

- [DisposableOrTeardown](util.md#disposableorteardown)
- [Exception](util.md#exception)

### Variables

- [disposed](util.md#disposed)

### Functions

- [createDisposable](util.md#createdisposable)

## Type Aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [`DisposableLike`](../interfaces/util.DisposableLike.md) \| [`SideEffect1`](functions.md#sideeffect1)<[`Option`](functions.md#option)<[`Exception`](util.md#exception)\>\>

___

### Exception

Ƭ **Exception**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cause` | `unknown` |

## Variables

### disposed

• `Const` **disposed**: [`DisposableLike`](../interfaces/util.DisposableLike.md)

## Functions

### createDisposable

▸ **createDisposable**(): [`DisposableLike`](../interfaces/util.DisposableLike.md)

#### Returns

[`DisposableLike`](../interfaces/util.DisposableLike.md)
