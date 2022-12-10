import styles from './CalculatorComponent.module.css';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'

export const CalculatorComponent = () => {
    return (
        <div className={styles.container}>
            <ButtonComponent>C</ButtonComponent>
            <ButtonComponent>+/-</ButtonComponent>
            <ButtonComponent>%</ButtonComponent>
            <ButtonComponent>÷</ButtonComponent>

            <ButtonComponent>1</ButtonComponent>
            <ButtonComponent>2</ButtonComponent>
            <ButtonComponent>3</ButtonComponent>
            <ButtonComponent>÷</ButtonComponent>

            <ButtonComponent>4</ButtonComponent>
            <ButtonComponent>5</ButtonComponent>
            <ButtonComponent>6</ButtonComponent>
            <ButtonComponent>÷</ButtonComponent>

            <ButtonComponent>7</ButtonComponent>
            <ButtonComponent>8</ButtonComponent>
            <ButtonComponent>9</ButtonComponent>
            <ButtonComponent>÷</ButtonComponent>

            <ButtonComponent>0</ButtonComponent>
            <ButtonComponent>,</ButtonComponent>
            <ButtonComponent>=</ButtonComponent>
        </div>
    )
}
