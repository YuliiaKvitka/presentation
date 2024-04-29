import styles from './Button.module.css'

const Button = (props) => {
  return (
      <button className={styles.btn} >
     <span> {props.title}</span>
    </button>
  )
}

export default Button
