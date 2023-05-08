[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainers](../modules/core.ReactiveContainers.md) / TypeClass

# Interface: TypeClass<C\>

[core](../modules/core.md).[ReactiveContainers](../modules/core.ReactiveContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Hierarchy

- [`TypeClass`](core.Containers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [exhaust](core.ReactiveContainers.TypeClass.md#exhaust)
- [exhaustMap](core.ReactiveContainers.TypeClass.md#exhaustmap)
- [mergeAll](core.ReactiveContainers.TypeClass.md#mergeall)
- [mergeMap](core.ReactiveContainers.TypeClass.md#mergemap)
- [mergeWith](core.ReactiveContainers.TypeClass.md#mergewith)
- [scanLast](core.ReactiveContainers.TypeClass.md#scanlast)
- [scanMany](core.ReactiveContainers.TypeClass.md#scanmany)
- [switchAll](core.ReactiveContainers.TypeClass.md#switchall)
- [switchMap](core.ReactiveContainers.TypeClass.md#switchmap)

### Constructor Methods

- [animate](core.ReactiveContainers.TypeClass.md#animate)
- [combineLatest](core.ReactiveContainers.TypeClass.md#combinelatest)
- [currentTime](core.ReactiveContainers.TypeClass.md#currenttime)
- [defer](core.ReactiveContainers.TypeClass.md#defer)
- [empty](core.ReactiveContainers.TypeClass.md#empty)
- [fromEnumeratorFactory](core.ReactiveContainers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](core.ReactiveContainers.TypeClass.md#fromfactory)
- [fromIterable](core.ReactiveContainers.TypeClass.md#fromiterable)
- [fromOptional](core.ReactiveContainers.TypeClass.md#fromoptional)
- [fromReadonlyArray](core.ReactiveContainers.TypeClass.md#fromreadonlyarray)
- [generate](core.ReactiveContainers.TypeClass.md#generate)
- [merge](core.ReactiveContainers.TypeClass.md#merge)
- [never](core.ReactiveContainers.TypeClass.md#never)
- [throws](core.ReactiveContainers.TypeClass.md#throws)
- [zipLatest](core.ReactiveContainers.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](core.ReactiveContainers.TypeClass.md#backpressurestrategy)
- [catchError](core.ReactiveContainers.TypeClass.md#catcherror)
- [decodeWithCharset](core.ReactiveContainers.TypeClass.md#decodewithcharset)
- [dispatchTo](core.ReactiveContainers.TypeClass.md#dispatchto)
- [encodeUtf8](core.ReactiveContainers.TypeClass.md#encodeutf8)
- [enqueue](core.ReactiveContainers.TypeClass.md#enqueue)
- [forkCombineLatest](core.ReactiveContainers.TypeClass.md#forkcombinelatest)
- [forkMerge](core.ReactiveContainers.TypeClass.md#forkmerge)
- [forkZipLatest](core.ReactiveContainers.TypeClass.md#forkziplatest)
- [retry](core.ReactiveContainers.TypeClass.md#retry)
- [takeUntil](core.ReactiveContainers.TypeClass.md#takeuntil)
- [throttle](core.ReactiveContainers.TypeClass.md#throttle)
- [throwIfEmpty](core.ReactiveContainers.TypeClass.md#throwifempty)
- [timeout](core.ReactiveContainers.TypeClass.md#timeout)
- [withCurrentTime](core.ReactiveContainers.TypeClass.md#withcurrenttime)
- [withLatestFrom](core.ReactiveContainers.TypeClass.md#withlatestfrom)
- [zipWithLatestFrom](core.ReactiveContainers.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](core.ReactiveContainers.TypeClass.md#firstasync)
- [lastAsync](core.ReactiveContainers.TypeClass.md#lastasync)
- [multicast](core.ReactiveContainers.TypeClass.md#multicast)
- [share](core.ReactiveContainers.TypeClass.md#share)

## Operator Properties

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/core.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Containers.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Containers.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Containers.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Containers.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

## Constructor Methods

### animate

▸ **animate**<`T`\>(`configs`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`AnimationConfig`](../modules/core.ReactiveContainers.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](../modules/core.ReactiveContainers.md#animationconfig)<`T`\>[] |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/core.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### currentTime

▸ **currentTime**(`options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `number`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.Containers.TypeClass.md).[empty](core.Containers.TypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.Containers.TypeClass.md).[fromEnumeratorFactory](core.Containers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.Containers.TypeClass.md).[fromFactory](core.Containers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](core.Containers.TypeClass.md).[fromIterable](core.Containers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](core.Containers.TypeClass.md).[fromOptional](core.Containers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](core.Containers.TypeClass.md).[fromReadonlyArray](core.Containers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.Containers.TypeClass.md).[generate](core.Containers.TypeClass.md#generate)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/core.Containers.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/core.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### never

▸ **never**<`T`\>(): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

Returns a container that zips the latest values from
multiple sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/core.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Returns a Container which catches errors produced by the source and either continues with
the Container returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](../modules/core.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`number`, `unknown`, `boolean`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`Of`](../modules/core.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`Of`](../modules/core.Containers.md#of)<`C`, `unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Returns a Container that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time in ms within which the source must emit values. |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`Of`](../modules/core.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `T`, `TOut`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `T`\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `T`\>

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>
