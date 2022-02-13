type ButtonProps = {
    text?: string,
}

export const Button = (props: ButtonProps) => <button>{props.text || 'Default'}</button>

