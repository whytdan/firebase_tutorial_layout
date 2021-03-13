import { Button, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import * as Yup from "yup";
import TextError from '../../../components/TextError';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import classes from '../auth.module.css';

export default function LoginForm() {

	const initialValues = {
		email: "",
		password: "",
	}

	const validationSchema = Yup.object({
		email: Yup.string().required("Обязательное поле!").email('Неверный формат email!'),
		password: Yup.string().required("Обязательное поле!").min(6, 'Требуется как минимум 6 символов!'),
	  });

    const notify = (email) => toast(`Вы вошли в систему как ${email}!`, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		newestOnTop: false,
		closeOnClick: true,
		rtl: false,
		pauseOnFocusLoss: true,
		draggable: true,
		pauseOnHover: true,
		type: 'success'
	});

    const notifyError = () => toast('Неверные данные или несуществующий юзер!', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		newestOnTop: false,
		closeOnClick: true,
		rtl: false,
		pauseOnFocusLoss: true,
		draggable: true,
		pauseOnHover: true,
		type: 'error'
	});

	const history = useHistory();

	const onSubmit = (values, actions) => {
		const { email, password } = values;
        
		
		actions.resetForm();
	}

	return (
		<div>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{() => (
					<Form className={classes.form}>

					<h1>
						Логин
					</h1>

						<div style={{marginBottom: 30}}>
							<Field
								type="email" 
								name="email" 
								fullWidth={true} 
								variant="outlined"
								placeholder="Email"
								as={TextField}
							/>
							
							<ErrorMessage component={TextError} name="email" />
						</div>
						
						<div 
							style={{marginBottom: 30}}
						>
							<Field
								type="password" 
								name="password" 
								fullWidth={true} 
								variant="outlined"
								placeholder="Пароль"
								as={TextField}
							/>

							<ErrorMessage component={TextError} name="password" />

						</div>

						<Button type="submit" color="primary" variant="contained">	
							Войти
        		</Button>

					</Form>
				)}
			</Formik>

		</div>
	)
}
