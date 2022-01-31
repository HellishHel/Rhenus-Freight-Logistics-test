import React from 'react';
import styles from './styles.module.scss';
import MarkRequired from "../MarkRequired";

const InputContainer = (props) => {
    const {title, img, type, value, comment, isRequired} = props;
    const required = isRequired ? <MarkRequired /> : null;

    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{title}{required}</h5>
            <div className={styles.inputWrap}>
                {img ?
                    (<div className={styles.imgWrap}>
                        <img className={styles.icon} src={img} alt=""/>
                    </div>)
                : null}
                <input type={type ? type : 'text'} value={value}/>
            </div>
            <div className={styles.comment}>{comment}</div>
        </div>
    );
}

export default InputContainer;