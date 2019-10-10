import React from "react";

import { useStyles } from "./contentStyles";
import Typography from "@material-ui/core/Typography"

export default function ContentRuRekvisits(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Реквизиты</Typography>
      <br />
      <ul className={classes.unstyled}>
        <li itemProp="name">Наименование: ООО "Бизнес-Оптимизация"</li>
        <li>Юр. адрес: 109462, г. Москва, ул. Маршала Чуйкова, 11/2-116</li>
        <li>Почтовый адрес: 109457, г. Москва, Мещерский переулок, 6/2-108</li>
        <li>Телефон: +7 916 592 6645</li>
        <li>Email: info @ busation.ru</li>
        <li>ИНН/КПП: 5408290560 / 772101001</li>
        <li>ОГРН: 1115476126590</li>
        <li>Банк: АО "АЛЬФА-БАНК", г. Москва</li>
        <li>Расчетный счет: 40702810302880000716</li>
        <li>Кор. счет: 30101810200000000593</li>
        <li>БИК: 044525593</li>
      </ul>
    </div>
  );
}

ContentRuRekvisits.propTypes = {
};

ContentRuRekvisits.defaultProps = {
};
