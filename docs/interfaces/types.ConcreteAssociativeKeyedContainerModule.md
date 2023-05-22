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

- [empty](types.ConcreteAssociativeKeyedContainerModule.md#empty)
- [fromEntries](types.ConcreteAssociativeKeyedContainerModule.md#fromentries)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = `NonNullable`<`C`[typeof `__KeyedContainer_TKey`]\> |

#### Returns

[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
