[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / BackpressureStrategy

# Interface: BackpressureStrategy<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).BackpressureStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [backpressureStrategy](core.ReactiveContainer.BackpressureStrategy.md#backpressurestrategy)

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
