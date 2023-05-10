[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / ConcreteAssociativeKeyedContainerTypeClass

# Interface: ConcreteAssociativeKeyedContainerTypeClass<C, TKeyBase\>

[type-classes](../modules/type_classes.md).ConcreteAssociativeKeyedContainerTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md) |
| `TKeyBase` | extends [`KeyOf`](../modules/types.md#keyof)<`C`\> = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

## Hierarchy

- **`ConcreteAssociativeKeyedContainerTypeClass`**

  ↳ [`Signature`](ReadonlyMap.Signature.md)

  ↳ [`Signature`](ReadonlyObjectMap.Signature.md)

## Table of contents

### Constructor Methods

- [empty](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#empty)
- [fromEntries](type_classes.ConcreteAssociativeKeyedContainerTypeClass.md#fromentries)

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

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
