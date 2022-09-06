import React, { useState } from "react"
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./contentStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import michaelImg from "../images/team/michael2.jpg";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import vadimImg from "../images/team/vadim.jpg";
import maxImg from "../images/team/max2.jpg";

export default function ContentEn(props) {
  const classes = useStyles();

  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className={classes.root}>
      <div>
        <a id="services" className={classes.anchor} />
        <Typography variant="h4">Services</Typography>
        <br />
        <ul>
          <li>
            Development of frontend with <b>React</b> (Redux, Cypress, TypeScript)
          </li>
          <li>
            Development of backend with <b>Node.js</b> (Hapi, MongoDB, Postgres, Elastic Search)
          </li>
          <li>
            Mobile development (<b>Android, iOS</b>)
          </li>
          <li>
            Set up of <b>infrastructure and deployment</b> of applications (AWS, Yandex Cloud, Docker Swarm, Circle CI, Linode)
          </li>
          <li>
            <b>Data analysis and machine learning</b> (SQL, Python, NumPy, Scikit-learn)
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: 20 }}>
        <a id="team" className={classes.anchor} />
        <Typography variant="h4">Our team</Typography>
        <br />
        <p>We are a small but very efficient team of remote workers.</p>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={michaelImg}
                  title="Michael"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Michael - JS/React/Node
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I have worked for 8 years in IT and for 4 years with React and Node.js. I worked for big companies (Alfa-Bank, CFT) and have experience working remotely for clients from the USA and Europe on Upwork.
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
                  title="Vadim"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Vadim - Android/Java
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I have 10 years of experience in the IT sector and I’ve been working for 3 years with Android. I have experience working remotely for clients from the USA and Europe on Upwork.
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
                  title="Max"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Max - JS/React/Node
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I have 2 years experience working with JavaScript, TypeScript, Node.js
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div>
        <a id="values" className={classes.anchor} />
        <Typography variant="h4">Our values</Typography>
        <br />
        <ul>
          <li>Long-term relationships, creating trust and partnership</li>
          <li>Being hard-working and committed because we do what we enjoy</li>
          <li>Moving fast and being open-minded</li>
        </ul>
      </div>
      <div>
        <a id="portfolio" className={classes.anchor} />
        <Typography variant="h4">Portfolio</Typography>
        <br />
        <ul>
          <li>
            <b>Payroll services</b> for a company from New-York (React, Redux,
            Redux-Saga, Material-UI, Devextreme, Reselect, Azure) -{" "}
            <i>May 2022 - until now</i>
          </li>
          <li>
            <b>Online application form</b> for a big russian bank
            (React, Redux, Redux-Saga, TypeScript, Formik, Cypress, Node.js,
            Hapi) - <i>June 2020 - August 2022</i>
          </li>
          <li>
            <b>Online testing application</b> for US schools, K12 system (React,
            Redux, Cypress, Ant Design, MongoDB, Elastic Search) -{" "}
            <i>October 2020 - April 2021</i>
          </li>
          <li>
            <b>Platform for online programming education</b>, internal project
            (React, Node.js, Hapi, MongoDB, Circle CI, Docker Swarm, Linode) -{" "}
            <i>July 2020 - September 2020</i>
          </li>
          <li>
            <b>System to support holding conferences </b> for a company from
            Australia (React, Node.js, Hapi, Knex, Postgres, AWS, Circle CI) -{" "}
            <i>May 2020 - June 2020</i>
          </li>
        </ul>
      </div>
      <div>
        <a id="contacts" className={classes.anchor} />
        <Typography variant="h4">Contacts</Typography>
        <br />
        <div>
          <div className={classes.contacts}>Business-Optimization, LLC</div>
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
                Show
              </Button>
            )}
            {showEmail && (
              <a href="mailto:info@busation.ru">info@busation.ru</a>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <Typography variant="h4">Inspirational quotes</Typography>
        <br />
        <div>
          <div className={classes.dictum}>
            "A man of honor helps others to realize their best aims, but not
            their worst desires. A petty-minded man does the opposite." -{" "}
            <i>Confucius</i>
          </div>
          <div className={classes.dictum}>
            "I'm the one that's got to die when it's time for me to die, so let
            me live my life the way I want to." - <i>Jimi Hendrix</i>
          </div>
          <div className={classes.dictum}>
            "Good friends, good books, and a sleepy conscience: this is the
            ideal life." - <i>Mark Twain</i>
          </div>
          <div className={classes.dictum}>
            "Life is like riding a bicycle. To keep your balance, you must keep
            moving." - <i>Albert Einstein</i>
          </div>
        </div>
      </div>
    </div>
  );
}

ContentEn.propTypes = {
  title: PropTypes.string
};

ContentEn.defaultProps = {
  title: ""
};
