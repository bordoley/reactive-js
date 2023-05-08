[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / CatchError

# Interface: CatchError<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).CatchError

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [catchError](core.ReactiveContainer.CatchError.md#catcherror)

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container which catches errors produced by the source and either continues with
the Container returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
