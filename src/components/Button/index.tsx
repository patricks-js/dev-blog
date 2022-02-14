import { ButtonHTMLAttributes } from "react";

import { Buttons } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props : ButtonProps) => <Buttons {...props}/>

