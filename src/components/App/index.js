import React from 'react';
import styles from './styles.module.scss';
import MarkRequired from "../MarkRequired";
import { inputsData } from "../../inputsData";
import InputContainer from "../InputContainer";
import CommentContainer from "../CommentContainer";

function App() {
  return (
    <div className={styles.container}>
        <div className={styles.description}>
          <h2>Запрос # 24 <span className={styles.status}>Ожидает обработки</span></h2>
          <p className={styles.info}>Информация о точках маршрута, модели транспортного средства и другие сведения о перевозке.</p>
          <p className={styles.infoRequired}>Поля, помеченные <MarkRequired /> являются обязательными для заполнения.</p>
        </div>
        <div className={styles.fields}>
            {inputsData.map(({title, type, value, img, comment, isRequired}) => {
                return (
                    <InputContainer
                        title={title}
                        type={type}
                        value={value}
                        img={img}
                        comment={comment}
                        isRequired={isRequired}
                    />)
            })}
            <CommentContainer
                value={"Требования прежние: 22-23т, АДР 3 класс, без температурного режима."}
            />
        </div>
    </div>
  );
}

export default App;
