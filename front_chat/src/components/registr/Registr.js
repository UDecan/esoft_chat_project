import React, { useState } from 'react';
import Validator from '../../validator';
import {
  Button,
  Input,
  InputLabel,
  FormControl,
  Typography
} from '@material-ui/core';

export default function Registr(props) {
  const [inputValue, setInputValue] = useState({

  });

  const [errors, setErrors] = useState({});

  const submitHandler = () => {
    // валидация
    const validator = new Validator();
    console.log(validator)
    
  }
  const changeHandler = e => setInputValue({ ...inputValue, [e.target.id]: e.target.value });

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
          id="user_name"
          className="form_control"
          type="text"
          placeholder="Ваш логин"
          onChange={changeHandler}
          error="tst"
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
