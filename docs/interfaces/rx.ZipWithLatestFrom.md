[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ZipWithLatestFrom

# Interface: ZipWithLatestFrom<C\>

[rx](../modules/rx.md).ZipWithLatestFrom

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ZipWithLatestFrom`**

## Table of contents

### Properties

- [ContainerLike\_type](rx.ZipWithLatestFrom.md#containerlike_type)

### Operator Methods

- [zipWithLatestFrom](rx.ZipWithLatestFrom.md#zipwithlatestfrom)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Operator Methods

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `T`\>
