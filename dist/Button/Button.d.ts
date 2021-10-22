import React from 'react';
export interface ButtonProps {
    className?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: 'primary' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    border?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map