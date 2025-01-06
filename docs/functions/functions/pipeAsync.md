[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [functions](../README.md) / pipeAsync

# Function: pipeAsync()

Pipes the source through a series of async operators.

## Call Signature

> **pipeAsync**\<`T`, `A`\>(`src`, `op1`): `Promise`\<`A`\>

### Type Parameters

• **T**

• **A**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

### Returns

`Promise`\<`A`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`\>(`src`, `op1`, `op2`): `Promise`\<`B`\>

### Type Parameters

• **T**

• **A**

• **B**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

### Returns

`Promise`\<`B`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`\>(`src`, `op1`, `op2`, `op3`): `Promise`\<`C`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

### Returns

`Promise`\<`C`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`\>(`src`, `op1`, `op2`, `op3`, `op4`): `Promise`\<`D`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

### Returns

`Promise`\<`D`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`): `Promise`\<`E`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

### Returns

`Promise`\<`E`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`): `Promise`\<`F`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

#### op6

[`Function1`](../type-aliases/Function1.md)\<`E`, `F` \| `Promise`\<`F`\>\>

### Returns

`Promise`\<`F`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): `Promise`\<`G`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

#### op6

[`Function1`](../type-aliases/Function1.md)\<`E`, `F` \| `Promise`\<`F`\>\>

#### op7

[`Function1`](../type-aliases/Function1.md)\<`F`, `G` \| `Promise`\<`G`\>\>

### Returns

`Promise`\<`G`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): `Promise`\<`H`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

#### op6

[`Function1`](../type-aliases/Function1.md)\<`E`, `F` \| `Promise`\<`F`\>\>

#### op7

[`Function1`](../type-aliases/Function1.md)\<`F`, `G` \| `Promise`\<`G`\>\>

#### op8

[`Function1`](../type-aliases/Function1.md)\<`G`, `H` \| `Promise`\<`H`\>\>

### Returns

`Promise`\<`H`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): `Promise`\<`I`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

• **I**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

#### op6

[`Function1`](../type-aliases/Function1.md)\<`E`, `F` \| `Promise`\<`F`\>\>

#### op7

[`Function1`](../type-aliases/Function1.md)\<`F`, `G` \| `Promise`\<`G`\>\>

#### op8

[`Function1`](../type-aliases/Function1.md)\<`G`, `H` \| `Promise`\<`H`\>\>

#### op9

[`Function1`](../type-aliases/Function1.md)\<`H`, `I` \| `Promise`\<`I`\>\>

### Returns

`Promise`\<`I`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): `Promise`\<`J`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

• **I**

• **J**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

#### op6

[`Function1`](../type-aliases/Function1.md)\<`E`, `F` \| `Promise`\<`F`\>\>

#### op7

[`Function1`](../type-aliases/Function1.md)\<`F`, `G` \| `Promise`\<`G`\>\>

#### op8

[`Function1`](../type-aliases/Function1.md)\<`G`, `H` \| `Promise`\<`H`\>\>

#### op9

[`Function1`](../type-aliases/Function1.md)\<`H`, `I` \| `Promise`\<`I`\>\>

#### op10

[`Function1`](../type-aliases/Function1.md)\<`I`, `J` \| `Promise`\<`J`\>\>

### Returns

`Promise`\<`J`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): `Promise`\<`K`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

• **I**

• **J**

• **K**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

#### op6

[`Function1`](../type-aliases/Function1.md)\<`E`, `F` \| `Promise`\<`F`\>\>

#### op7

[`Function1`](../type-aliases/Function1.md)\<`F`, `G` \| `Promise`\<`G`\>\>

#### op8

[`Function1`](../type-aliases/Function1.md)\<`G`, `H` \| `Promise`\<`H`\>\>

#### op9

[`Function1`](../type-aliases/Function1.md)\<`H`, `I` \| `Promise`\<`I`\>\>

#### op10

[`Function1`](../type-aliases/Function1.md)\<`I`, `J` \| `Promise`\<`J`\>\>

#### op11

[`Function1`](../type-aliases/Function1.md)\<`J`, `K` \| `Promise`\<`K`\>\>

### Returns

`Promise`\<`K`\>

## Call Signature

> **pipeAsync**\<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`src`, `op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): `Promise`\<`L`\>

### Type Parameters

• **T**

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

• **I**

• **J**

• **K**

• **L**

### Parameters

#### src

`T`

#### op1

[`Function1`](../type-aliases/Function1.md)\<`T`, `A` \| `Promise`\<`A`\>\>

#### op2

[`Function1`](../type-aliases/Function1.md)\<`A`, `B` \| `Promise`\<`B`\>\>

#### op3

[`Function1`](../type-aliases/Function1.md)\<`B`, `C` \| `Promise`\<`C`\>\>

#### op4

[`Function1`](../type-aliases/Function1.md)\<`C`, `D` \| `Promise`\<`D`\>\>

#### op5

[`Function1`](../type-aliases/Function1.md)\<`D`, `E` \| `Promise`\<`E`\>\>

#### op6

[`Function1`](../type-aliases/Function1.md)\<`E`, `F` \| `Promise`\<`F`\>\>

#### op7

[`Function1`](../type-aliases/Function1.md)\<`F`, `G` \| `Promise`\<`G`\>\>

#### op8

[`Function1`](../type-aliases/Function1.md)\<`G`, `H` \| `Promise`\<`H`\>\>

#### op9

[`Function1`](../type-aliases/Function1.md)\<`H`, `I` \| `Promise`\<`I`\>\>

#### op10

[`Function1`](../type-aliases/Function1.md)\<`I`, `J` \| `Promise`\<`J`\>\>

#### op11

[`Function1`](../type-aliases/Function1.md)\<`J`, `K` \| `Promise`\<`K`\>\>

#### op12

[`Function1`](../type-aliases/Function1.md)\<`K`, `L` \| `Promise`\<`L`\>\>

### Returns

`Promise`\<`L`\>
