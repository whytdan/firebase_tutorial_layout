import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from '../auth.module.css';
import * as Yup from "yup";
import TextError from '../../../components/TextError';

export default function RegisterForm() {

	const initialValues = {
		email: "",
		password: "",
		passwordConfirm: ""
	}

	const validationSchema = Yup.object({
		email: Yup.string().required("Обязательное поле!").email('Неверный формат email!'),
		password: Yup.string().required("Обязательное поле!").min(6, 'Требуется как минимум 6 символов!'),
		passwordConfirm: Yup.string().required("Обязательное поле!").oneOf([Yup.ref('password'), null], 'Пароли должны совпадать!')
	});

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
						Регистрация
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

						<div 
							style={{marginBottom: 30}}
						>
							<Field
								type="password" 
								name="passwordConfirm" 
								fullWidth={true} 
								variant="outlined"
								placeholder="Подтвердите пароль"
								as={TextField}
							/>
							<ErrorMessage component={TextError} name="passwordConfirm" />

						</div>

						<Button type="submit" color="primary" variant="contained">	
							Отправить
        				</Button>

					</Form>
				)}
			</Formik>

		</div>
	)
}
