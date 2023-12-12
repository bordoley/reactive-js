[Reactive-JS](../README.md) / concurrent/Observable/effects

# Module: concurrent/Observable/effects

## Table of contents

### Functions

- [\_\_await](concurrent_Observable_effects.md#__await)
- [\_\_bindMethod](concurrent_Observable_effects.md#__bindmethod)
- [\_\_constant](concurrent_Observable_effects.md#__constant)
- [\_\_currentScheduler](concurrent_Observable_effects.md#__currentscheduler)
- [\_\_do](concurrent_Observable_effects.md#__do)
- [\_\_memo](concurrent_Observable_effects.md#__memo)
- [\_\_observe](concurrent_Observable_effects.md#__observe)
- [\_\_state](concurrent_Observable_effects.md#__state)
- [\_\_stream](concurrent_Observable_effects.md#__stream)
- [\_\_using](concurrent_Observable_effects.md#__using)

## Functions

### \_\_await

▸ **__await**<`T`\>(`observable`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

#### Returns

`T`

___

### \_\_bindMethod

▸ **__bindMethod**<`T`, `TKey`, `TFunction`\>(`thiz`, `key`): `TFunction`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends { [K in string \| number \| symbol]: Function } |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `TFunction` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thiz` | `T` |
| `key` | `TKey` |

#### Returns

`TFunction`

___

### \_\_constant

▸ **__constant**<`T`\>(`value`, `...args`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...args` | `unknown`[] |

#### Returns

`T`

___

### \_\_currentScheduler

▸ **__currentScheduler**(): [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md)

___

### \_\_do

▸ **__do**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

`void`

▸ **__do**<`TA`\>(`fn`, `a`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect1`](functions.md#sideeffect1)<`TA`\> |
| `a` | `TA` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`\>(`fn`, `a`, `b`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect2`](functions.md#sideeffect2)<`TA`, `TB`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`\>(`fn`, `a`, `b`, `c`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect3`](functions.md#sideeffect3)<`TA`, `TB`, `TC`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`\>(`fn`, `a`, `b`, `c`, `d`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect4`](functions.md#sideeffect4)<`TA`, `TB`, `TC`, `TD`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect5`](functions.md#sideeffect5)<`TA`, `TB`, `TC`, `TD`, `TE`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect6`](functions.md#sideeffect6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`void`

___

### \_\_memo

▸ **__memo**<`T`\>(`fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

`T`

▸ **__memo**<`TA`, `T`\>(`fn`, `a`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function1`](functions.md#function1)<`TA`, `T`\> |
| `a` | `TA` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function5`](functions.md#function5)<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function6`](functions.md#function6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`T`

___

### \_\_observe

▸ **__observe**<`T`\>(`observable`): [`Optional`](functions.md#optional)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`T`\> |

#### Returns

[`Optional`](functions.md#optional)<`T`\>

___

### \_\_state

▸ **__state**<`T`\>(`initialState`, `options?`): [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | () => `T` |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.equality?` | [`Optional`](functions.md#optional)<[`Equality`](functions.md#equality)<`T`\>\> |
| `options.replay?` | `number` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

___

### \_\_stream

▸ **__stream**<`TStreamable`\>(`streamable`, `«destructured»?`): `ReturnType`<`TStreamable`[typeof [`StreamableLike_stream`](concurrent.md#streamablelike_stream)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`unknown`, `unknown`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`unknown`, `unknown`\>, `TStreamable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | `TStreamable` |
| `«destructured»` | `Object` |
| › `backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| › `capacity?` | `number` |
| › `replay?` | `number` |
| › `scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

`ReturnType`<`TStreamable`[typeof [`StreamableLike_stream`](concurrent.md#streamablelike_stream)]\>

___

### \_\_using

▸ **__using**<`T`\>(`fn`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

`T`

▸ **__using**<`TA`, `T`\>(`fn`, `a`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `T` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function1`](functions.md#function1)<`TA`, `T`\> |
| `a` | `TA` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `T` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `T` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `T` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `T` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function5`](functions.md#function5)<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `TF` | `TF` |
| `T` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function6`](functions.md#function6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`T`
