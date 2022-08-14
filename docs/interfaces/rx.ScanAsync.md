[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ScanAsync

# Interface: ScanAsync<C, CInner\>

[rx](../modules/rx.md).ScanAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `CInner` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](../modules/containers.md#container)<`C`\>

  ↳ **`ScanAsync`**

## Table of contents

### Properties

- [ContainerLike\_type](rx.ScanAsync.md#containerlike_type)

### Methods

- [scanAsync](rx.ScanAsync.md#scanasync)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

Container.ContainerLike\_type

## Methods

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](../modules/rx.md#asyncreducer)<`CInner`, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TAcc`\>
