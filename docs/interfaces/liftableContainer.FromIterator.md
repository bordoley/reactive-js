[Reactive-JS](../README.md) / [liftableContainer](../modules/liftableContainer.md) / FromIterator

# Interface: FromIterator<C, O\>

[liftableContainer](../modules/liftableContainer.md).FromIterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md) |
| `O` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `never`\> |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`FromIterator`**

## Table of contents

### Properties

- [TContainerOf](liftableContainer.FromIterator.md#tcontainerof)

### Methods

- [fromIterator](liftableContainer.FromIterator.md#fromiterator)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### fromIterator

▸ **fromIterator**<`T`, `TReturn`, `TNext`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`O`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>
