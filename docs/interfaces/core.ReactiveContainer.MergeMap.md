[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / MergeMap

# Interface: MergeMap<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).MergeMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Properties

- [mergeMap](core.ReactiveContainer.MergeMap.md#mergemap)

## Operator Properties

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>
