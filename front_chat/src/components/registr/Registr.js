import React from 'react';
import {
  Button,
  Input,
  InputLabel,
  FormControl,
  Typography
} from '@material-ui/core';

export default function Registr(props) {
  return (
    <div className="auth_div blackShadow">
      <Typography className="auth_title" variant="h5" color="primary">
        Регистрация
        </Typography>
      <FormControl>
        <InputLabel htmlFor="user_name">
          Логин
          </InputLabel>
        <Input
          className="form_control"
          type="text"
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
          placeholder="Пароль"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="user_password">
          Повторите пароль
          </InputLabel>
        <Input
          className="form_control"
          type="password"
          placeholder="Повторите пароль"
        />
      </FormControl>

      <Button variant="contained" color="primary">
        Зарегистрироваться
      </Button>

      <Button variant="contained" color="primary" href="/auth">
        Войти
      </Button>
    </div>
  );
}
