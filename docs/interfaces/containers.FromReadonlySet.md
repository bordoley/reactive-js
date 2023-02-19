[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FromReadonlySet

# Interface: FromReadonlySet<C, O\>

[containers](../modules/containers.md).FromReadonlySet

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromReadonlySet`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.FromReadonlySet.md#containerlike_type)

### Methods

- [fromReadonlySet](containers.FromReadonlySet.md#fromreadonlyset)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### fromReadonlySet

▸ **fromReadonlySet**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`ReadonlySet`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlySet`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
