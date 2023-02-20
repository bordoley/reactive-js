[Reactive-JS](../README.md) / [containers](../modules/containers.md) / CatchError

# Interface: CatchError<C, O\>

[containers](../modules/containers.md).CatchError

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](containers.StatefulContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`CatchError`**

## Table of contents

### Operator Methods

- [catchError](containers.CatchError.md#catcherror)

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns a StatefulContainerLike which catches errors produced by the source and either continues with
the StatefulContainerLike returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\> | a function that takes source error and either returns a StatefulContainerLike to continue with or void if the error should be propagated. |
| `options?` | `O` | - |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
