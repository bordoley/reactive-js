[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Reduce

# Interface: Reduce<C\>

[containers](../modules/containers.md).Reduce

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Transform Methods

- [reduce](containers.Reduce.md#reduce)

## Transform Methods

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `TAcc`\>
