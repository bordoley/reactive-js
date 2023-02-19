[Reactive-JS](../README.md) / [containers](../modules/containers.md) / TakeFirst

# Interface: TakeFirst<C, O\>

[containers](../modules/containers.md).TakeFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`TakeFirst`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.TakeFirst.md#containerlike_type)

### Methods

- [takeFirst](containers.TakeFirst.md#takefirst)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `count?`: `number`  } |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
