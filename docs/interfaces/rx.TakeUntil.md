[Reactive-JS](../README.md) / [rx](../modules/rx.md) / TakeUntil

# Interface: TakeUntil<C\>

[rx](../modules/rx.md).TakeUntil

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`TakeUntil`**

## Table of contents

### Properties

- [ContainerLike\_type](rx.TakeUntil.md#containerlike_type)

### Methods

- [takeUntil](rx.TakeUntil.md#takeuntil)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | `C` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
