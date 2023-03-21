[Reactive-JS](../README.md) / integrations/react

# Module: integrations/react

## Table of contents

### Hook Functions

- [useFlowable](integrations_react.md#useflowable)
- [useObservable](integrations_react.md#useobservable)
- [useStreamable](integrations_react.md#usestreamable)

### Other Functions

- [createComponent](integrations_react.md#createcomponent)

## Hook Functions

### useFlowable

▸ **useFlowable**<`T`\>(`flowable`, `options?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flowable` | [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\> |
| `options?` | `Object` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isPaused` | `boolean` |
| `pause` | [`SideEffect`](functions.md#sideeffect) |
| `resume` | [`SideEffect`](functions.md#sideeffect) |
| `value` | [`Optional`](functions.md#optional)<`T`\> |

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

___

### useStreamable

▸ **useStreamable**<`TReq`, `T`\>(`streamable`, `options?`): readonly [[`Optional`](functions.md#optional)<`T`\>, [`SideEffect1`](functions.md#sideeffect1)<`TReq`\>]

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\> |
| `options?` | `Object` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)\> |

#### Returns

readonly [[`Optional`](functions.md#optional)<`T`\>, [`SideEffect1`](functions.md#sideeffect1)<`TReq`\>]

___

## Other Functions

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
