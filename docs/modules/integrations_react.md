[Reactive-JS](../README.md) / integrations/react

# Module: integrations/react

## Table of contents

### Hook Functions

- [useAnimation](integrations_react.md#useanimation)
- [useAnimations](integrations_react.md#useanimations)
- [useEnumerate](integrations_react.md#useenumerate)
- [useFlowable](integrations_react.md#useflowable)
- [useObservable](integrations_react.md#useobservable)
- [useStream](integrations_react.md#usestream)
- [useStreamable](integrations_react.md#usestreamable)

### Other Functions

- [createComponent](integrations_react.md#createcomponent)

## Hook Functions

### useAnimation

▸ **useAnimation**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `deps` | readonly `unknown`[] |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"switching"`` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

▸ **useAnimation**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `deps` | readonly `unknown`[] |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"blocking"`` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `boolean`]

▸ **useAnimation**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `deps` | readonly `unknown`[] |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

▸ **useAnimation**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options?`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

___

### useAnimations

▸ **useAnimations**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Factory`](functions.md#factory)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\>, `string`\>\> |
| `deps` | readonly `unknown`[] |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.mode` | ``"switching"`` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

▸ **useAnimations**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Factory`](functions.md#factory)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\>, `string`\>\> |
| `deps` | readonly `unknown`[] |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.mode` | ``"blocking"`` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `boolean`]

▸ **useAnimations**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Factory`](functions.md#factory)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\>, `string`\>\> |
| `deps` | readonly `unknown`[] |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

▸ **useAnimations**<`TEvent`, `T`\>(`animationFactory`, `deps`, `options?`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationFactory` | [`Factory`](functions.md#factory)<[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\>, `string`\>\> |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

___

### useEnumerate

▸ **useEnumerate**<`T`\>(`enumerable`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `current` | `T` |
| `hasCurrent` | `boolean` |
| `move` | () => `boolean` |

___

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
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

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
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` | - |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

___

### useStream

▸ **useStream**<`TReq`, `T`, `TStream`\>(`streamable`, `options?`): [`Optional`](functions.md#optional)<`TStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`, `TStream`\> = [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, `TStream`\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

#### Returns

[`Optional`](functions.md#optional)<`TStream`\>

___

### useStreamable

▸ **useStreamable**<`TReq`, `T`\>(`streamable`, `options?`): readonly [[`Optional`](functions.md#optional)<`T`\>, [`Function1`](functions.md#function1)<`TReq`, `boolean`\>]

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
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

#### Returns

readonly [[`Optional`](functions.md#optional)<`T`\>, [`Function1`](functions.md#function1)<`TReq`, `boolean`\>]

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
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

`ComponentType`<`TProps`\>
