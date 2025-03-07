import { JSX } from "react";
import { Props as ProductCardProps } from "../components/ProductsCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";


export interface Product {
    id: number;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product}: ProductCardProps): JSX.Element,
    Buttons: ( Props: ProductButtonsProps) => JSX.Element,
    Image:   ( Props: ProductImageProps  ) => JSX.Element,
    Title:   ( Props: ProductTitleProps  ) => JSX.Element,
}


export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCartHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,

    increaseBy: (value: number) => void,
    reset: () => void,

}