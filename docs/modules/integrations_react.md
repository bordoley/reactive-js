[Reactive-JS](../README.md) / integrations/react

# Module: integrations/react

## Table of contents

### Hook Functions

- [useEnumerable](integrations_react.md#useenumerable)
- [useFlowable](integrations_react.md#useflowable)
- [useObservable](integrations_react.md#useobservable)
- [useStream](integrations_react.md#usestream)
- [useStreamable](integrations_react.md#usestreamable)

### Other Functions

- [createComponent](integrations_react.md#createcomponent)

## Hook Functions

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
| `options.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

`ComponentType`<`TProps`\>
