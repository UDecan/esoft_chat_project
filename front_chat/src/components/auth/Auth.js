import React from 'react';
import {
    Button,
    Input,
    InputLabel,
    FormControl,
    Typography
} from '@material-ui/core';
import './Auth.scss';


export default function Auth(props) {
  return(
    <div className="auth_div blackShadow">
      <Typography className="auth_title" variant="h5" color="primary">
        Вход в систему
      </Typography>
      <FormControl>
        <InputLabel htmlFor="user_name">
          Логин
        </InputLabel>
        <Input
          className="form_control"
          type="text"
          id="user_name"
          placeholder="Ваш логин"
          required
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="user_password">
          Пароль
        </InputLabel>
        <Input
          className="form_control"
          type="password"
          id="user_password"
          placeholder="Ваш пароль"
        />
      </FormControl>

      <Button variant="contained" color="primary">
        Войти
      </Button>
      
      <Button variant="contained" color="primary" href="/registr">
        Регистрация
      </Button>
    </div>
  );
}