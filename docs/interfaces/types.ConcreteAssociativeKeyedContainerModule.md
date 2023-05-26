[Reactive-JS](../README.md) / [types](../modules/types.md) / ConcreteAssociativeKeyedContainerModule

# Interface: ConcreteAssociativeKeyedContainerModule<C, TKeyBase\>

[types](../modules/types.md).ConcreteAssociativeKeyedContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md) |
| `TKeyBase` | extends [`KeyOf`](../modules/types.md#keyof)<`C`\> = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

## Hierarchy

- [`ConcreteKeyedContainerModule`](types.ConcreteKeyedContainerModule.md)<`C`, `TKeyBase`\>

- [`AssociativeKeyedContainerModule`](types.AssociativeKeyedContainerModule.md)<`C`, `TKeyBase`\>

  ↳ **`ConcreteAssociativeKeyedContainerModule`**

  ↳↳ [`ReadonlyMapModule`](ReadonlyMap.ReadonlyMapModule.md)

  ↳↳ [`ReadonlyObjectMapModule`](ReadonlyObjectMap.ReadonlyObjectMapModule.md)

## Table of contents

### Constructor Methods

- [fromEntries](types.ConcreteAssociativeKeyedContainerModule.md#fromentries)

## Constructor Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
