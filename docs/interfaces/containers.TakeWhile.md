[Reactive-JS](../README.md) / [containers](../modules/containers.md) / TakeWhile

# Interface: TakeWhile<C, O\>

[containers](../modules/containers.md).TakeWhile

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`TakeWhile`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.TakeWhile.md#containerlike_type)

### Methods

- [takeWhile](containers.TakeWhile.md#takewhile)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `O` & { `inclusive?`: `boolean`  } |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
