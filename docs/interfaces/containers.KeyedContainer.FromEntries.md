[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [KeyedContainer](../modules/containers.KeyedContainer.md) / FromEntries

# Interface: FromEntries<C\>

[containers](../modules/containers.md).[KeyedContainer](../modules/containers.KeyedContainer.md).FromEntries

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](containers.KeyedContainer-1.md) |

## Table of contents

### Constructor Methods

- [fromEntries](containers.KeyedContainer.FromEntries.md#fromentries)

## Constructor Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
