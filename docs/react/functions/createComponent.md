[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [react](../README.md) / createComponent

# Function: createComponent()

> **createComponent**\<`TProps`\>(`fn`, `options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<`TProps`, `ReactNode`\>

## Type Parameters

• **TProps**

## Parameters

### fn

[`Function1`](../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../computations/interfaces/MulticastObservableLike.md)\<`TProps`\>, [`ObservableLike`](../../computations/interfaces/ObservableLike.md)\<`ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>\>\>

### options?

#### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

#### capacity?

`number`

#### priority?

`2` \| `1` \| `3` \| `4` \| `5`

## Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`TProps`, `ReactNode`\>
