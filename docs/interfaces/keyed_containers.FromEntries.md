[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / FromEntries

# Interface: FromEntries<C\>

[keyed-containers](../modules/keyed_containers.md).FromEntries

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |

## Table of contents

### Constructor Methods

- [fromEntries](keyed_containers.FromEntries.md#fromentries)

## Constructor Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
