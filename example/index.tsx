import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';


const product = {
  id: 1,
  title: 'Coffe Mug - Card',
  // img: '../public/coffee-mug.png'
}

const App = () => {
  return (
    <>
       <ProductCard 
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

    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
