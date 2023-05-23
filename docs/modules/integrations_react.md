[Reactive-JS](../README.md) / integrations/react

# Module: integrations/react

## Table of contents

### Hook Functions

- [useDispatcher](integrations_react.md#usedispatcher)
- [useDisposable](integrations_react.md#usedisposable)
- [useEnumerate](integrations_react.md#useenumerate)
- [useEnumerator](integrations_react.md#useenumerator)
- [useListen](integrations_react.md#uselisten)
- [useObserve](integrations_react.md#useobserve)
- [usePauseable](integrations_react.md#usepauseable)
- [useStream](integrations_react.md#usestream)

### Other Functions

- [createComponent](integrations_react.md#createcomponent)

## Hook Functions

### useDispatcher

▸ **useDispatcher**<`TReq`\>(`dispatcher`): `Object`

#### Type parameters

| Name |
| :------ |
| `TReq` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`Optional`](functions.md#optional)<[`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`TReq`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `complete` | [`SideEffect`](functions.md#sideeffect) |
| `enqueue` | [`Function1`](functions.md#function1)<`TReq`, `boolean`\> |

___

### useDisposable

▸ **useDisposable**<`TDisposable`\>(`factory`, `deps`): [`Optional`](functions.md#optional)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | () => [`Optional`](functions.md#optional)<`TDisposable`\> |
| `deps` | readonly `unknown`[] |

#### Returns

[`Optional`](functions.md#optional)<`TDisposable`\>

___

### useEnumerate

▸ **useEnumerate**<`T`\>(`enumerable`): [`Optional`](functions.md#optional)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |

#### Returns

[`Optional`](functions.md#optional)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

▸ **useEnumerate**<`T`\>(`factory`, `deps`): [`Optional`](functions.md#optional)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\> |
| `deps` | readonly `unknown`[] |

#### Returns

[`Optional`](functions.md#optional)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### useEnumerator

▸ **useEnumerator**<`T`\>(`enumerator`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`Optional`](functions.md#optional)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `current` | `T` |
| `hasCurrent` | `boolean` |
| `move` | [`Factory`](functions.md#factory)<`boolean`\> |

___

### useListen

▸ **useListen**<`T`\>(`eventSource`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSource` | [`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

▸ **useListen**<`T`\>(`factory`, `deps`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>\> |
| `deps` | readonly `unknown`[] |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

___

### useObserve

▸ **useObserve**<`T`\>(`observable`, `options?`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`Optional`](functions.md#optional)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

▸ **useObserve**<`T`\>(`factory`, `deps`, `options?`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`Optional`](functions.md#optional)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>\> |
| `deps` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

___

### usePauseable

▸ **usePauseable**(`pauseable`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pauseable` | [`Optional`](functions.md#optional)<[`PauseableLike`](../interfaces/types.PauseableLike.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isPaused` | `boolean` |
| `pause` | [`SideEffect`](functions.md#sideeffect) |
| `resume` | [`SideEffect`](functions.md#sideeffect) |

___

### useStream

▸ **useStream**<`TStreamable`\>(`streamable`, `options?`): [`Optional`](functions.md#optional)<[`StreamOf`](types.md#streamof)<`TStreamable`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/types.StreamableLike.md)<`unknown`, `unknown`, [`StreamLike`](../interfaces/types.StreamLike.md)<`unknown`, `unknown`\>, `TStreamable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | `TStreamable` |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

#### Returns

[`Optional`](functions.md#optional)<[`StreamOf`](types.md#streamof)<`TStreamable`\>\>

▸ **useStream**<`TStreamable`\>(`factory`, `dep`, `options?`): [`Optional`](functions.md#optional)<[`StreamOf`](types.md#streamof)<`TStreamable`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/types.StreamableLike.md)<`unknown`, `unknown`, [`StreamLike`](../interfaces/types.StreamLike.md)<`unknown`, `unknown`\>, `TStreamable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`TStreamable`\> |
| `dep` | readonly `unknown`[] |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `options.replay?` | `number` |

#### Returns

[`Optional`](functions.md#optional)<[`StreamOf`](types.md#streamof)<`TStreamable`\>\>

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
| `fn` | [`Function1`](functions.md#function1)<[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TProps`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

`ComponentType`<`TProps`\>
