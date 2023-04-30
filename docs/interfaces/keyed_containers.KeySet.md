[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / KeySet

# Interface: KeySet<C\>

[keyed-containers](../modules/keyed_containers.md).KeySet

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |

## Table of contents

### Transform Methods

- [keySet](keyed_containers.KeySet.md#keyset)

## Transform Methods

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyed_containers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>
