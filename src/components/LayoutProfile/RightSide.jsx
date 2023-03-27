import style from './style.module.css'

const RightSide = ({ children }) => {
    return (
        <div class={`col-8 col-md-8  ${style.rightSide}`}>
            {children}
        </div>
    )
}

export default RightSide