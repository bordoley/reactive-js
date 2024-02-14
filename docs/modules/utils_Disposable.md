[Reactive-JS](../README.md) / utils/Disposable

# Module: utils/Disposable

## Table of contents

### Interfaces

- [DisposableModule](../interfaces/utils_Disposable.DisposableModule.md)

### Type Aliases

- [Signature](utils_Disposable.md#signature)

### Variables

- [disposed](utils_Disposable.md#disposed)

### Functions

- [add](utils_Disposable.md#add)
- [addTo](utils_Disposable.md#addto)
- [bindTo](utils_Disposable.md#bindto)
- [create](utils_Disposable.md#create)
- [raiseIfDisposedWithError](utils_Disposable.md#raiseifdisposedwitherror)
- [toErrorHandler](utils_Disposable.md#toerrorhandler)
- [using](utils_Disposable.md#using)
- [usingAsync](utils_Disposable.md#usingasync)
- [usingAsyncLazy](utils_Disposable.md#usingasynclazy)
- [usingLazy](utils_Disposable.md#usinglazy)

## Type Aliases

### Signature

Ƭ **Signature**: [`DisposableModule`](../interfaces/utils_Disposable.DisposableModule.md)

## Variables

### disposed

• `Const` **disposed**: [`Signature`](utils_Disposable.md#signature)[``"disposed"``]

## Functions

### add

▸ **add**\<`TDisposable`\>(`child`, `options?`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### addTo

▸ **addTo**\<`TDisposable`\>(`parent`, `options?`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### bindTo

▸ **bindTo**\<`TDisposable`\>(`child`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### create

▸ **create**(): [`DisposableLike`](../interfaces/utils.DisposableLike.md)

#### Returns

[`DisposableLike`](../interfaces/utils.DisposableLike.md)

___

### raiseIfDisposedWithError

▸ **raiseIfDisposedWithError**(`disposable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

`void`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](functions.md#sideeffect1)\<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)\<`unknown`\>

___

### using

▸ **using**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `TResult`\>, `TResult`\>

▸ **using**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

▸ **using**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

___

### usingAsync

▸ **usingAsync**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

▸ **usingAsync**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

▸ **usingAsync**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, `Promise`\<`TResult`\>\>

___

### usingAsyncLazy

▸ **usingAsyncLazy**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, [`Factory`](functions.md#factory)\<`Promise`\<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `Promise`\<`TResult`\>\>, [`Factory`](functions.md#factory)\<`Promise`\<`TResult`\>\>\>

▸ **usingAsyncLazy**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, [`Factory`](functions.md#factory)\<`Promise`\<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `Promise`\<`TResult`\>\>, [`Factory`](functions.md#factory)\<`Promise`\<`TResult`\>\>\>

▸ **usingAsyncLazy**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, [`Factory`](functions.md#factory)\<`Promise`\<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`\<`TResult`\>\>, [`Factory`](functions.md#factory)\<`Promise`\<`TResult`\>\>\>

___

### usingLazy

▸ **usingLazy**\<`TDisposable`, `TResult`\>(`factory`): [`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `TResult`\>, [`Factory`](functions.md#factory)\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)\<`TDisposable`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function1`](functions.md#function1)\<`TDisposable`, `TResult`\>, [`Factory`](functions.md#factory)\<`TResult`\>\>

▸ **usingLazy**\<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryA`, `factoryB`): [`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](functions.md#factory)\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function2`](functions.md#function2)\<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](functions.md#factory)\<`TResult`\>\>

▸ **usingLazy**\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryA`, `factoryB`, `factoryC`): [`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](functions.md#factory)\<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryA` | [`Factory`](functions.md#factory)\<`TDisposableA`\> |
| `factoryB` | [`Factory`](functions.md#factory)\<`TDisposableB`\> |
| `factoryC` | [`Factory`](functions.md#factory)\<`TDisposableC`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`Function3`](functions.md#function3)\<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](functions.md#factory)\<`TResult`\>\>
