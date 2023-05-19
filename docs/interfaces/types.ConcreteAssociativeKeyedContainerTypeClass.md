[Reactive-JS](../README.md) / [types](../modules/types.md) / ConcreteAssociativeKeyedContainerTypeClass

# Interface: ConcreteAssociativeKeyedContainerTypeClass<C, TKeyBase\>

[types](../modules/types.md).ConcreteAssociativeKeyedContainerTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md) |
| `TKeyBase` | extends [`KeyOf`](../modules/types.md#keyof)<`C`\> = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

## Hierarchy

- [`ConcreteKeyedContainerTypeClass`](types.ConcreteKeyedContainerTypeClass.md)<`C`, `TKeyBase`\>

- [`AssociativeKeyedContainerTypeClass`](types.AssociativeKeyedContainerTypeClass.md)<`C`, `TKeyBase`\>

  ↳ **`ConcreteAssociativeKeyedContainerTypeClass`**

  ↳↳ [`ReadonlyMapModule`](ReadonlyMap.ReadonlyMapModule.md)

  ↳↳ [`ReadonlyObjectMapModule`](ReadonlyObjectMap.ReadonlyObjectMapModule.md)

## Table of contents

### Constructor Methods

- [empty](types.ConcreteAssociativeKeyedContainerTypeClass.md#empty)
- [fromEntries](types.ConcreteAssociativeKeyedContainerTypeClass.md#fromentries)

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

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
