import React from 'react';
import styles from './styles.module.scss';

const CommentContainer = (props) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>Комментарий</h5>
            <textarea>
                {props.value}
            </textarea>
        </div>
    );
}

export default CommentContainer;