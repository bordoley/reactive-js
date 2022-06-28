[Reactive-JS](../README.md) / [container](../modules/container.md) / Buffer

# Interface: Buffer<C\>

[container](../modules/container.md).Buffer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Buffer`**

## Table of contents

### Properties

- [type](container.Buffer.md#type)

### Methods

- [buffer](container.Buffer.md#buffer)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBufferSize?` | `number` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, readonly `T`[]\>
