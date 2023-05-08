[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / Reduce

# Interface: Reduce<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).Reduce

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Transform Methods

- [reduce](core.KeyedContainer.Reduce.md#reduce)

## Transform Methods

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>, `TAcc`\>
