[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / Entries

# Interface: Entries<C, O\>

[keyed-containers](../modules/keyed_containers.md).Entries

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |
| `O` | `never` |

## Table of contents

### Transform Methods

- [entries](keyed_containers.Entries.md#entries)

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>
