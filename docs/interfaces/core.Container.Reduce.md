[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Reduce

# Interface: Reduce<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Reduce

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Transform Methods

- [reduce](core.Container.Reduce.md#reduce)

## Transform Methods

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `TAcc`\>
