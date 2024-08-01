[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [integrations/react](../README.md) / createComponent

# Function: createComponent()

> **createComponent**\<`TProps`\>(`fn`, `options`?): `ComponentType`\<`TProps`\>

## Type Parameters

• **TProps**

## Parameters

• **fn**: [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../../concurrent/interfaces/MulticastObservableLike.md)\<`TProps`\>, [`ObservableLike`](../../../concurrent/interfaces/ObservableLike.md)\<`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>\>\>

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.priority?**: `2` \| `1` \| `3` \| `4` \| `5`

## Returns

`ComponentType`\<`TProps`\>
