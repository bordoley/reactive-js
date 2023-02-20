[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ToReadonlyArray

# Interface: ToReadonlyArray<C, O\>

[containers](../modules/containers.md).ToReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToReadonlyArray`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.ToReadonlyArray.md#containerlike_type)

### Converter Methods

- [toReadonlyArray](containers.ToReadonlyArray.md#toreadonlyarray)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Converter Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>
