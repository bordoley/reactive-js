[Reactive-JS](../README.md) / [liftableContainer](../modules/liftableContainer.md) / CatchError

# Interface: CatchError<C\>

[liftableContainer](../modules/liftableContainer.md).CatchError

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`CatchError`**

## Table of contents

### Properties

- [TContainerOf](liftableContainer.CatchError.md#tcontainerof)

### Methods

- [catchError](liftableContainer.CatchError.md#catcherror)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>
