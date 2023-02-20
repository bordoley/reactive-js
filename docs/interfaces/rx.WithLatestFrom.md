[Reactive-JS](../README.md) / [rx](../modules/rx.md) / WithLatestFrom

# Interface: WithLatestFrom<C\>

[rx](../modules/rx.md).WithLatestFrom

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`WithLatestFrom`**

## Table of contents

### Properties

- [ContainerLike\_type](rx.WithLatestFrom.md#containerlike_type)

### Operator Methods

- [withLatestFrom](rx.WithLatestFrom.md#withlatestfrom)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Operator Methods

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `T`\>

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
