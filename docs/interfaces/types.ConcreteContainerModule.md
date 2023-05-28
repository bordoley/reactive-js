[Reactive-JS](../README.md) / [types](../modules/types.md) / ConcreteContainerModule

# Interface: ConcreteContainerModule<C\>

[types](../modules/types.md).ConcreteContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`ContainerModule`](types.ContainerModule.md)<`C`\>

  ↳ **`ConcreteContainerModule`**

  ↳↳ [`ConcreteIndexedContainerModule`](types.ConcreteIndexedContainerModule.md)

  ↳↳ [`CollectionContainerModule`](types.CollectionContainerModule.md)

  ↳↳ [`AssociativeCollectionContainerModule`](types.AssociativeCollectionContainerModule.md)

## Table of contents

### Constructor Methods

- [empty](types.ConcreteContainerModule.md#empty)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>
