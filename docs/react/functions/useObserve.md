[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [react](../README.md) / useObserve

# Function: useObserve()

## Call Signature

> **useObserve**\<`T`\>(`observable`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### observable

[`Optional`](../../functions/type-aliases/Optional.md)\<[`ObservableLike`](../../computations/interfaces/ObservableLike.md)\<`T`\>\>

#### options?

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

## Call Signature

> **useObserve**\<`T`\>(`factory`, `deps`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<[`ObservableLike`](../../computations/interfaces/ObservableLike.md)\<`T`\>\>\>

#### deps

readonly `unknown`[]

#### options?

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>
