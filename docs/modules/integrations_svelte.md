[Reactive-JS](../README.md) / integrations/svelte

# Module: integrations/svelte

## Table of contents

### Functions

- [subscribe](integrations_svelte.md#subscribe)

## Functions

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](types.md#observablelike)<`T`\>, { `subscribe`: (`callback`: (`next`: [`Optional`](functions.md#optional)<`T`\>) => `void`) => [`Factory`](functions.md#factory)<`void`\>  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](types.md#observablelike)<`T`\>, { `subscribe`: (`callback`: (`next`: [`Optional`](functions.md#optional)<`T`\>) => `void`) => [`Factory`](functions.md#factory)<`void`\>  }\>
