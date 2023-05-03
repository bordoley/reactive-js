[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [KeyedContainer](../modules/containers.KeyedContainer.md) / ReduceWithKey

# Interface: ReduceWithKey<C\>

[containers](../modules/containers.md).[KeyedContainer](../modules/containers.KeyedContainer.md).ReduceWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](containers.KeyedContainer-1.md) |

## Table of contents

### Transform Methods

- [reduceWithKey](containers.KeyedContainer.ReduceWithKey.md#reducewithkey)

## Transform Methods

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>
