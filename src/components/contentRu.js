import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import michaelImg from "../images/team/michael2.jpg";
import vadimImg from "../images/team/vadim.jpg";
import maxImg from "../images/team/max2.jpg";

import { useStyles } from "./contentStyles";

export default function ContentRu(props) {
  const classes = useStyles();

  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className={classes.root}>
      <div>
        <a id="services" className={classes.anchor} />
        <Typography variant="h4">Услуги</Typography>
        <br />
        <ul>
          <li>
            Frontend разработка на <b>React</b> (Redux, Cypress, TypeScript)
          </li>
          <li>
            Backend разработка на <b>Node.js</b> (Hapi, MongoDB, Postgres, Elastic
            Search)
          </li>
          <li>
            Мобильная разработка (<b>Android, iOS</b>)
          </li>
          <li>
            <b>Настройка инфраструктуры и равзвертывание приложений</b> (AWS, Yandex Cloud, Docker Swarm,
            Circle CI, Linode)
          </li>
          <li>
            <b>Анализ данных и машинное обучение</b> (SQL, Python, NumPy,
            Scikit-learn)
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: 20 }}>
        <a id="team" className={classes.anchor} />
        <Typography variant="h4">Команда</Typography>
        <br />
        <p>
          Мы небольшая распределенная команда, которая умеет слажено и
          эффективно работать.
        </p>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={michaelImg}
                  title="Майкл"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Майкл - JS/React/Node
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    8 лет в IT индустрии, опыт работы в крупных компаниях:
                    Альфа-Банк, ЦФТ и фриланса с клиентами из США и Европы на
                    сайте Upwork
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href="https://github.com/klishevich"
                  rel="noreferrer noopener"
                  target="_blank"
                  className={classes.href}
                >
                  <Button size="small" color="primary">
                    Github
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/klishevich"
                  rel="noreferrer noopener"
                  target="_blank"
                  className={classes.href}
                >
                  <Button size="small" color="primary">
                    Facebook
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={vadimImg}
                  title="Вадим"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Вадим - Android/Java
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    10 лет в IT, опыт работы в российских компаниях и на
                    фрилансе с клиентами из США и Европы на сайте Upwork.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={maxImg}
                  title="Максим"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Максим - JS/React/Node
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    2 года разработки на различных проектах JavaScript, TypeScript, Node.js
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div>
        <a id="values" className={classes.anchor} />
        <Typography variant="h4">Ценности</Typography>
        <br />
        <ul>
          <li>Долгосрочные отношения, создающие доверие и партнерство</li>
          <li>Усердная работа, потому что мы делаем то что любим</li>
          <li>Оперативность и открытость к новым решениям</li>
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
            Devextreme, Reselect, Azure) - <i>май 2022 - по наст. время</i>
          </li>
          <li>
            <b>Онлайн анкета для подключения клиентов</b> для одного крупного
            российского банка (React, Redux, Redux-Saga, TypeScript, Formik,
            Cypress, Node.js, Hapi) - <i>июнь 2020 - август 2022</i>
          </li>
          <li>
            <b>Система для онлайн тестирования школьников</b> для американской
            школьной системы K12 (React, Redux, Cypress, Ant Design, MongoDB,
            Elastic Search) - <i>октябрь 2020 - апрель 2021</i>
          </li>
          <li>
            <b>Система для онлайн курсов по программированию</b> (React, Node.js, Hapi, MongoDB, Circle CI, Docker Swarm,
            Linode) - <i>июль 2020 - сентябрь 2020</i>
          </li>
          <li>
            <b>Система для проведения конференций</b> для компании из Австралии
            (React, Node.js, Hapi, Knex, Postgres, AWS, Circle CI) -{" "}
            <i>май 2020 - июнь 2020</i>
          </li>
        </ul>
      </div>
      <div>
        <a id="contacts" className={classes.anchor} />
        <Typography variant="h4">Контакты</Typography>
        <br />
        <div>
          <div className={classes.contacts}>ООО "Бизнес-Оптимизация"</div>
          <div className={classes.contacts}>
            Тел.: <a href="tel:+79165926645">+7 916 592 6645</a>
          </div>
          <div className={classes.contacts}>
            Email:{" "}
            {!showEmail && (
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setShowEmail(true)}
              >
                Показать
              </Button>
            )}
            {showEmail && (
              <a href="mailto:info@busation.ru">info@busation.ru</a>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <Typography variant="h4">Мотивирующие фразы</Typography>
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
