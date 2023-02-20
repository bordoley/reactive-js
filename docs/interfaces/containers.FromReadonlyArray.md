[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C, O\>

[containers](../modules/containers.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromReadonlyArray`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.FromReadonlyArray.md#containerlike_type)

### Constructor Methods

- [fromReadonlyArray](containers.FromReadonlyArray.md#fromreadonlyarray)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Constructor Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
