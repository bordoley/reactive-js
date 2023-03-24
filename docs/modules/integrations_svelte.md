[Reactive-JS](../README.md) / integrations/svelte

# Module: integrations/svelte

## Table of contents

### Functions

- [subscribe](integrations_svelte.md#subscribe)

## Functions

### subscribe

▸ **subscribe**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, { `subscribe`: (`callback`: (`next`: [`Optional`](functions.md#optional)<`T`\>) => `void`) => [`Factory`](functions.md#factory)<`void`\>  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, { `subscribe`: (`callback`: (`next`: [`Optional`](functions.md#optional)<`T`\>) => `void`) => [`Factory`](functions.md#factory)<`void`\>  }\>
