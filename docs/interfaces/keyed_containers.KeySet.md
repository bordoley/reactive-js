[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / KeySet

# Interface: KeySet<C, O\>

[keyed-containers](../modules/keyed_containers.md).KeySet

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |
| `O` | `never` |

## Table of contents

### Transform Methods

- [keySet](keyed_containers.KeySet.md#keyset)

## Transform Methods

### keySet

▸ **keySet**<`TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`ReadonlySetLike`](containers.ReadonlySetLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`ReadonlySetLike`](containers.ReadonlySetLike.md)<`TKey`\>\>
