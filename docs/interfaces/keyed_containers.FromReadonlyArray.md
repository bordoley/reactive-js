[Reactive-JS](../README.md) / [keyed-containers](../modules/keyed_containers.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C, O\>

[keyed-containers](../modules/keyed_containers.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyed_containers.KeyedContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Constructor Methods

- [fromReadonlyArray](keyed_containers.FromReadonlyArray.md#fromreadonlyarray)

## Constructor Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
