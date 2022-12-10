import styles from './ButtonComponent.module.css';

export const ButtonComponent = (props: any) => {
    return (
        <button>{props.children}</button>
    )
}
