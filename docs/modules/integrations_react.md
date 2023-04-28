[Reactive-JS](../README.md) / integrations/react

# Module: integrations/react

## Table of contents

### Hook Functions

- [useAnimation](integrations_react.md#useanimation)
- [useAnimations](integrations_react.md#useanimations)
- [useEnumerate](integrations_react.md#useenumerate)
- [useEventPublisher](integrations_react.md#useeventpublisher)
- [useEventSource](integrations_react.md#useeventsource)
- [useFlow](integrations_react.md#useflow)
- [useObservable](integrations_react.md#useobservable)
- [useStream](integrations_react.md#usestream)
- [useStreamable](integrations_react.md#usestreamable)

### Other Functions

- [createComponent](integrations_react.md#createcomponent)

## Hook Functions

### useAnimation

▸ **useAnimation**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

▸ **useAnimation**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

▸ **useAnimation**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

▸ **useAnimation**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options?`): readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

___

### useAnimations

▸ **useAnimations**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

▸ **useAnimations**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `boolean`]

▸ **useAnimations**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

▸ **useAnimations**<`T`, `TEvent`\>(`animationFactory`, `deps`, `options?`): readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
| `TEvent` | `unknown` |

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

readonly [[`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>, `string`\>, [`SideEffect1`](functions.md#sideeffect1)<`TEvent`\>, `never`]

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

▸ **useEnumerate**<`T`\>(`factory`, `deps`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\> |
| `deps` | readonly `unknown`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `current` | `T` |
| `hasCurrent` | `boolean` |
| `move` | () => `boolean` |

___

### useEventPublisher

▸ **useEventPublisher**<`T`\>(`«destructured»?`): [`EventPublisherLike`](../interfaces/util.EventPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `replay?` | `number` |

#### Returns

[`EventPublisherLike`](../interfaces/util.EventPublisherLike.md)<`T`\>

___

### useEventSource

▸ **useEventSource**<`T`\>(`eventSource`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSource` | [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\> |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

▸ **useEventSource**<`T`\>(`factory`, `deps`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\> |
| `deps` | readonly `unknown`[] |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

___

### useFlow

▸ **useFlow**<`T`\>(`runnable`, `options?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `runnable` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
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

▸ **useFlow**<`T`\>(`factory`, `deps`, `options?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |
| `deps` | readonly `unknown`[] |
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

▸ **useObservable**<`T`\>(`factory`, `deps`, `options?`): [`Optional`](functions.md#optional)<`T`\>

Returns the current value, if defined, of `observable`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

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

▸ **useStream**<`TReq`, `T`, `TStream`\>(`factory`, `dep`, `options?`): [`Optional`](functions.md#optional)<`TStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`, `TStream`\> = [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, `TStream`\>\> |
| `dep` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

#### Returns

[`Optional`](functions.md#optional)<`TStream`\>

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
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

#### Returns

readonly [[`Optional`](functions.md#optional)<`T`\>, [`SideEffect1`](functions.md#sideeffect1)<`TReq`\>]

▸ **useStreamable**<`TReq`, `T`\>(`factory`, `deps`, `options?`): readonly [[`Optional`](functions.md#optional)<`T`\>, [`SideEffect1`](functions.md#sideeffect1)<`TReq`\>]

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\>\> |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

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
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

`ComponentType`<`TProps`\>
