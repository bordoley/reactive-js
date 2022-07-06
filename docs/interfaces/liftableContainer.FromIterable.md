[Reactive-JS](../README.md) / [liftableContainer](../modules/liftableContainer.md) / FromIterable

# Interface: FromIterable<C, O\>

[liftableContainer](../modules/liftableContainer.md).FromIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md) |
| `O` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`FromIterable`**

## Table of contents

### Properties

- [TContainerOf](liftableContainer.FromIterable.md#tcontainerof)

### Methods

- [fromIterable](liftableContainer.FromIterable.md#fromiterable)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`O`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>
