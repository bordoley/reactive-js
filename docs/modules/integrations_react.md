[Reactive-JS](../README.md) / integrations/react

# Module: integrations/react

## Table of contents

### Functions

- [createComponent](integrations_react.md#createcomponent)
- [useObservable](integrations_react.md#useobservable)

## Functions

### createComponent

▸ **createComponent**<`TProps`\>(`fn`, `options?`): `ComponentType`<`TProps`\>

#### Type parameters

| Name |
| :------ |
| `TProps` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`props`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`TProps`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>\> |
| `options?` | `Object` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)\> |

#### Returns

`ComponentType`<`TProps`\>

___

### useObservable

▸ **useObservable**<`T`\>(`observable`, `options?`): [`Optional`](functions.md#optional)<`T`\>

Returns the current value, if defined, of `observable`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> | The `ObservableLike` to subscribe to. |
| `options?` | `Object` | - |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)\> | - |

#### Returns

[`Optional`](functions.md#optional)<`T`\>
