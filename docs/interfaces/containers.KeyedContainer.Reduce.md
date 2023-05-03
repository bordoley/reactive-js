[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [KeyedContainer](../modules/containers.KeyedContainer.md) / Reduce

# Interface: Reduce<C\>

[containers](../modules/containers.md).[KeyedContainer](../modules/containers.KeyedContainer.md).Reduce

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](containers.KeyedContainer-1.md) |

## Table of contents

### Transform Methods

- [reduce](containers.KeyedContainer.Reduce.md#reduce)

## Transform Methods

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/containers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `TAcc`\>
