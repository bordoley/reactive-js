[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / FlowableLike

# Interface: FlowableLike\<T\>

[concurrent](../modules/concurrent.md).FlowableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [[FlowableLike\_flow]](concurrent.FlowableLike.md#[flowablelike_flow])

## Methods

### [FlowableLike\_flow]

▸ **[FlowableLike_flow]**(`scheduler`, `options?`): [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](../modules/utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)\<`T`\>
