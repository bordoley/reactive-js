[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [functions](../README.md) / TypePredicate

# Type Alias: TypePredicate()\<TA, TB\>

> **TypePredicate**\<`TA`, `TB`\>: (`v`) => `v is TA & TB`

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

## Type Parameters

• **TA**

• **TB**

## Parameters

### v

`TA`

## Returns

`v is TA & TB`

`true` if v is an instance of type `TB`, otherwise false.
