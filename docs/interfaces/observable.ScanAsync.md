[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ScanAsync

# Interface: ScanAsync<C\>

[observable](../modules/observable.md).ScanAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ScanAsync`**

## Table of contents

### Properties

- [type](observable.ScanAsync.md#type)

### Methods

- [scanAsync](observable.ScanAsync.md#scanasync)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](../modules/observable.md#asyncreducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `TAcc`\>
