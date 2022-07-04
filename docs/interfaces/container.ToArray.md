[Reactive-JS](../README.md) / [container](../modules/container.md) / ToArray

# Interface: ToArray<C\>

[container](../modules/container.md).ToArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ToArray`**

## Table of contents

### Properties

- [TContainerOf](container.ToArray.md#tcontainerof)

### Methods

- [toArray](container.ToArray.md#toarray)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### toArray

▸ **toArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, readonly `T`[]\>
