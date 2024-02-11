[Reactive-JS](../README.md) / integrations/svelte

# Module: integrations/svelte

## Table of contents

### Functions

- [subscribe](integrations_svelte.md#subscribe)

## Functions

### subscribe

▸ **subscribe**\<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, \{ `subscribe`: (`callback`: (`next`: [`Optional`](functions.md#optional)\<`T`\>) => `void`) => [`Factory`](functions.md#factory)\<`void`\>  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)\<`T`\>, \{ `subscribe`: (`callback`: (`next`: [`Optional`](functions.md#optional)\<`T`\>) => `void`) => [`Factory`](functions.md#factory)\<`void`\>  }\>
