# LS-Product-Card

This is a deployment test package on NPM

## Luis P. Salvador

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

```

```

<ProductCard 
    key={ product.id }
    product={ product }
    initialValue = {{
        count: 4,
        maxCount: 15
    }}
>
        {
            ( { reset, isMaxCountReached, increaseBy, count, maxCount } ) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />

                </>
            )
        }
</ProductCard>