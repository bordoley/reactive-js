[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / Keys

# Interface: Keys<C, O\>

[keyed-containers](../modules/keyed_containers.md).Keys

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Keys`**

## Table of contents

### Transform Methods

- [keys](keyed_containers.Keys.md#keys)

## Transform Methods

### keys

▸ **keys**<`TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<`TKey`\>\>
