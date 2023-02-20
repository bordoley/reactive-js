[Reactive-JS](../README.md) / [containers](../modules/containers.md) / DistinctUntilChanged

# Interface: DistinctUntilChanged<C, O\>

[containers](../modules/containers.md).DistinctUntilChanged

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`DistinctUntilChanged`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.DistinctUntilChanged.md#containerlike_type)

### Operator Methods

- [distinctUntilChanged](containers.DistinctUntilChanged.md#distinctuntilchanged)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerOperator that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  } |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
