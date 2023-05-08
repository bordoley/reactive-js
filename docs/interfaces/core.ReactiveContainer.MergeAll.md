[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / MergeAll

# Interface: MergeAll<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).MergeAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Properties

- [mergeAll](core.ReactiveContainer.MergeAll.md#mergeall)

## Operator Properties

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>
