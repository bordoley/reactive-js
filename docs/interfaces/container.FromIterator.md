[Reactive-JS](../README.md) / [container](../modules/container.md) / FromIterator

# Interface: FromIterator<C, O\>

[container](../modules/container.md).FromIterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |
| `O` | extends `Object` = {} |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`FromIterator`**

## Table of contents

### Properties

- [type](container.FromIterator.md#type)

### Methods

- [fromIterator](container.FromIterator.md#fromiterator)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

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
