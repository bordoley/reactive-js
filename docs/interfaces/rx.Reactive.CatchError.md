[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / CatchError

# Interface: CatchError<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).CatchError

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](rx.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [catchError](rx.Reactive.CatchError.md#catcherror)

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

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
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
