[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [KeyedContainer](../modules/containers.KeyedContainer.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C\>

[containers](../modules/containers.md).[KeyedContainer](../modules/containers.KeyedContainer.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](containers.KeyedContainer-1.md) |

## Table of contents

### Constructor Methods

- [fromReadonlyArray](containers.KeyedContainer.FromReadonlyArray.md#fromreadonlyarray)

## Constructor Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
