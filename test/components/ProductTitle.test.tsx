import React from 'react';
import { render } from '@testing-library/react';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from './products';

 
describe('ProductTitle', () => {
 
  test('It should render the component correctly with the custom title', () => {
 
    const { asFragment } = render(<ProductTitle title="Custom Product" />);
    expect(asFragment()).toMatchSnapshot();    
 
  });
 
  test('should be show the component with the product name', () => { 
    
    const { asFragment } = render(
        <ProductCard product={ product1 }>
            {
                () => (
                    <ProductTitle />
                )
            }
        </ProductCard>
    );
 
    expect(asFragment()).toMatchSnapshot();    
 
   });
 
});
