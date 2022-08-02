[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / StreamableStateLike

# Interface: StreamableStateLike<T\>

[streaming](../modules/streaming.md).StreamableStateLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>

  ↳ **`StreamableStateLike`**

## Table of contents

### Methods

- [[StreamableLike\_stream]](streaming.StreamableStateLike.md#[streamablelike_stream])

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`StreamLike`](streaming.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](streaming.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_stream]](streaming.StreamableLike.md#[streamablelike_stream])
