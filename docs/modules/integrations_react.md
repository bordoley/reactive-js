[Reactive-JS](../README.md) / integrations/react

# Module: integrations/react

## Table of contents

### Hook Functions

- [useAnimation](integrations_react.md#useanimation)
- [useEnumerable](integrations_react.md#useenumerable)
- [useFlowable](integrations_react.md#useflowable)
- [useObservable](integrations_react.md#useobservable)
- [useStatefulAnimation](integrations_react.md#usestatefulanimation)
- [useStream](integrations_react.md#usestream)
- [useStreamable](integrations_react.md#usestreamable)

### Other Functions

- [createComponent](integrations_react.md#createcomponent)

## Hook Functions

### useAnimation

▸ **useAnimation**<`TEvent`, `T`\>(`animationConfigFactory`, `eventOptions`, `deps`, `options?`): readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name |
| :------ |
| `TEvent` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationConfigFactory` | [`Factory`](functions.md#factory)<readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `eventOptions` | `Object` |
| `eventOptions.mode` | ``"switching"`` |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

▸ **useAnimation**<`TEvent`, `T`\>(`animationConfigFactory`, `eventOptions`, `deps`, `options?`): readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `boolean`]

#### Type parameters

| Name |
| :------ |
| `TEvent` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationConfigFactory` | [`Factory`](functions.md#factory)<readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `eventOptions` | `Object` |
| `eventOptions.mode` | ``"blocking"`` |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `boolean`]

▸ **useAnimation**<`TEvent`, `T`\>(`animationConfigFactory`, `eventOptions`, `deps`, `options?`): readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

#### Type parameters

| Name |
| :------ |
| `TEvent` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationConfigFactory` | [`Factory`](functions.md#factory)<readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `eventOptions` | `Object` |
| `eventOptions.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `eventOptions.capacity?` | `number` |
| `eventOptions.mode` | ``"queueing"`` |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<`TEvent`, `boolean`\>, `never`]

___

### useEnumerable

▸ **useEnumerable**<`T`\>(`enumerable`): `Object`

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

### useStatefulAnimation

▸ **useStatefulAnimation**<`TState`, `T`\>(`animationConfigFactory`, `initialState`, `eventOptions`, `deps`, `options?`): readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<[`Updater`](functions.md#updater)<`TState`\>, `boolean`\>, `never`]

#### Type parameters

| Name |
| :------ |
| `TState` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationConfigFactory` | [`Factory`](functions.md#factory)<readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `initialState` | [`Factory`](functions.md#factory)<`TState`\> |
| `eventOptions` | `Object` |
| `eventOptions.equality?` | [`Equality`](functions.md#equality)<`TState`\> |
| `eventOptions.mode` | ``"switching"`` |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<[`Updater`](functions.md#updater)<`TState`\>, `boolean`\>, `never`]

▸ **useStatefulAnimation**<`TState`, `T`\>(`animationConfigFactory`, `initialState`, `eventOptions`, `deps`, `options?`): readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<[`Updater`](functions.md#updater)<`TState`\>, `boolean`\>, `boolean`]

#### Type parameters

| Name |
| :------ |
| `TState` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationConfigFactory` | [`Factory`](functions.md#factory)<readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `initialState` | [`Factory`](functions.md#factory)<`TState`\> |
| `eventOptions` | `Object` |
| `eventOptions.equality?` | [`Equality`](functions.md#equality)<`TState`\> |
| `eventOptions.mode` | ``"blocking"`` |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<[`Updater`](functions.md#updater)<`TState`\>, `boolean`\>, `boolean`]

▸ **useStatefulAnimation**<`TState`, `T`\>(`animationConfigFactory`, `initialState`, `eventOptions`, `deps`, `options?`): readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<[`Updater`](functions.md#updater)<`TState`\>, `boolean`\>, `never`]

#### Type parameters

| Name |
| :------ |
| `TState` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationConfigFactory` | [`Factory`](functions.md#factory)<readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\> |
| `initialState` | [`Factory`](functions.md#factory)<`TState`\> |
| `eventOptions` | `Object` |
| `eventOptions.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `eventOptions.capacity?` | `number` |
| `eventOptions.equality?` | [`Equality`](functions.md#equality)<`TState`\> |
| `eventOptions.mode` | ``"queueing"`` |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

readonly [[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>, [`Function1`](functions.md#function1)<[`Updater`](functions.md#updater)<`TState`\>, `boolean`\>, `never`]

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
