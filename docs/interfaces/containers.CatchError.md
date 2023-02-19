[Reactive-JS](../README.md) / [containers](../modules/containers.md) / CatchError

# Interface: CatchError<C, O\>

[containers](../modules/containers.md).CatchError

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`CatchError`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.CatchError.md#containerlike_type)

### Methods

- [catchError](containers.CatchError.md#catcherror)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### catchError

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\> |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
