[Reactive-JS](../README.md) / [computations](../modules/computations.md) / DeferredComputationModule

# Interface: DeferredComputationModule<C\>

[computations](../modules/computations.md).DeferredComputationModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computations.Computation.md) |

## Hierarchy

- **`DeferredComputationModule`**

  ↳ [`EnumerableModule`](collections_Enumerable.EnumerableModule.md)

## Table of contents

### Methods

- [fromReadonlyArray](computations.DeferredComputationModule.md#fromreadonlyarray)
- [generate](computations.DeferredComputationModule.md#generate)

## Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ComputationOf`](../modules/computations.md#computationof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ComputationOf`](../modules/computations.md#computationof)<`C`, `T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`ComputationOf`](../modules/computations.md#computationof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`ComputationOf`](../modules/computations.md#computationof)<`C`, `T`\>
