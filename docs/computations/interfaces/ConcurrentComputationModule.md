[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentComputationModule

# Interface: ConcurrentComputationModule\<TComputationType, TCreationOptions\>

## Extended by

- [`BroadcasterModule`](../Broadcaster/interfaces/BroadcasterModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

• **TCreationOptions** *extends* `object` = \{\}

## Methods

### toObservable()

> **toObservable**\<`T`\>(): [`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>

***

### toProducer()

> **toProducer**\<`T`\>(`options`?): [`ToProducer`](../type-aliases/ToProducer.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toProducer"`\]

#### Returns

[`ToProducer`](../type-aliases/ToProducer.md)\<`TComputationType`, `T`\>
