import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./contentStyles";
import Image from "./image";

export default function ContentRu(props) {
  const classes = useStyles();

  const { title } = props;

  return (
    <div className={classes.root}>
      <div>
        <a id="services" className={classes.anchor} />
        <Typography variant="h4">Услуги</Typography>
        <br />
        <ul>
          <li>
            Пилим Frontend на <b>React</b> (Redux, Cypress, TypeScript)
          </li>
          <li>
            и Backend на <b>Node.js</b> (Hapi, MongoDB, Postgres, Elastic
            Search)
          </li>
          <li>
            Мобильно разрабатываем (<b>Android, iOS</b>)
          </li>
          <li>
            <b>Поднимаем сервера и облака</b> (AWS, Yandex Cloud, Docker Swarm,
            Circle CI, Linode)
          </li>
          <li>
            <b>Анализируем данные и обучаем машины</b> (SQL, Python, NumPy,
            Scikit-learn)
          </li>
        </ul>
      </div>
      <div>
        <a id="portfolio" className={classes.anchor} />
        <Typography variant="h4">Портфолио</Typography>
        <br />
        <ul>
          <li>
            <b>Система для формирования отчетов по начислению зарплаты</b> для
            компании из Нью-Йорка (React, Redux, Redux-Saga, Material-UI,
            Devextreme, Reselect, Azure) - <b>май 2019 - по наст. время</b>
          </li>
          <li>
            <b>Онлайн анкета для подключения клиентов</b> для одного крупного
            российского банка (React, Redux, Redux-Saga, TypeScript, Formik,
            Cypress, Node.js, Hapi) - <b>июнь 2017 - август 2019</b>
          </li>
          <li>
            <b>Система для онлайн тестирования школьников</b> для американской
            школьной системы K12 (React, Redux, Cypress, Ant Design, MongoDB,
            Elastic Search) - <b>октябрь 2018 - апрель 2019</b>
          </li>
          <li>
            <b>Система для онлайн курсов по программированию</b> внутренняя
            разработка (React, Node.js, Hapi, MongoDB, Circle CI, Docker Swarm,
            Linode) - <b>июль 2018 - сентябрь 2018</b>
          </li>
          <li>
            <b>Система для проведения конференций</b> для компании из Австралии
            (React, Node.js, Hapi, Knex, Postgres, AWS, Circle CI) -{" "}
            <b>май 2018 - июнь 2018</b>
          </li>
        </ul>
      </div>
      <div>
        <a id="team" className={classes.anchor} />
        <Typography variant="h4">Команда</Typography>
        <br />
        <ul>
          <li>
            <b>Майкл</b> - JavaScript-разработчик / DevOps
          </li>
          <li>
            <b>Вадим</b> - Android / Java-разработчик
          </li>
          <li>
            <b>Катя</b> - Анализ данных / ML
          </li>
        </ul>
      </div>
      <div>
        <a id="values" className={classes.anchor} />
        <Typography variant="h4">Ценности</Typography>
        <br />
        <ul>
          <li>Долгосрочные и доверительные отношения</li>
          <li>Работа в удовольствие</li>
          <li>Скорость и открытость к новым решениям</li>
        </ul>
      </div>
      <div>
        <a id="contacts" className={classes.anchor} />
        <Typography variant="h4">Контакты</Typography>
        <br />
        <div>
          <div className={classes.contacts}>ООО "Бизнес-Оптимизация"</div>
          <div className={classes.contacts}>Майкл Клишевич - CEO</div>
          <div className={classes.contacts}>
            Тел.: <a href="tel:+79165926645">+7 916 592 6645</a>
          </div>
          <div className={classes.contacts}>
            Telegram:{" "}
            <a target="_blank" href="https://t.me/klishevich">
              @klishevich
            </a>
          </div>
          <div className={classes.contacts}>Email: info@busation.ru</div>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <Typography variant="h4">Афоризмы</Typography>
        <br />
        <div>
          <div className={classes.dictum}>
            "Не поговорить с человеком, который достоин разговора, значит
            потерять человека. А говорить с человеком, который разговора не
            достоин — значит терять слова. Мудрый не теряет ни людей, ни слов."
            - <i>Конфуций</i>
          </div>
          <div className={classes.dictum}>
            "Каждый, кто перестает учиться — стареет, неважно в 20 или 80 лет, а
            любой другой, кто продолжает учиться остается молодым. Самое главное
            в жизни – это сохранить мозг молодым." - <i>Генри Форд</i>
          </div>
          <div className={classes.dictum}>
            "Природа наделила нас двумя ушами, двумя глазами, но лишь одним
            языком, дабы мы смотрели и слушали больше, чем говорили." -{" "}
            <i>Сократ</i>
          </div>
          <div className={classes.dictum}>
            "Не гоняйся за счастьем: оно всегда находится в тебе самом." -{" "}
            <i>Пифагор</i>
          </div>
        </div>
      </div>
    </div>
  );
}

ContentRu.propTypes = {
  title: PropTypes.string
};

ContentRu.defaultProps = {
  title: ""
};
