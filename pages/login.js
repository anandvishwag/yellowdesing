import { useState, Fragment } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import withGuest from '../utils/withGuest';
import InnerPageBanner from '../components/partials/InnerPageBanner';
import styles from '../styles/InnerPage.module.scss'
let bannerImage = '/images/innerBnr.jpg';
import { Formik } from 'formik';
import AlertMessage from '../utils/Alert';
import { setCookie } from 'nookies'; 
function Login() {
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // });
    // const [error, setError] = useState('');
    const router = useRouter();

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (values, { setSubmitting }) => {
       
        try {
            console.log(values);
            const res = await axios.post('/api/login', {
                email:values.email,
                password:values.password
            });
          
            if(res.data && res.data.status){
                console.log(res.data);
                setCookie(null, 'token', res.data.token, {
                    maxAge: 3600, // seconds
                    path: '/',
                  });
            //  const role = res.data.role;
              
                
            //     // const decodedToken = jwt.decode(res.data.token);
            //     if (role === 'admin') {
            //         router.push('/admin/dashboard');
            //     } else {
            //         router.push('/user/dashboard');
            //     }
                setSubmitting(false);
            }else{
                AlertMessage(res.data.message, 'error', 'top-center')
            }
        } catch (error) {
            console.log(error);
            // setError('Login failed. Please try again.');
        }
    };

    return (
        <Fragment>
            <InnerPageBanner style={styles} pageTitle="Login" bannerImage={bannerImage} />
            <div className={styles.innerPageContent}>
                <div className={styles.authWrapper}>
                    <div className='container'>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Email is required.';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                if (!values.password) {
                                    errors.password = 'Password is required.';
                                } 
                                
                                return errors;
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>

                                    <div className={styles.formGroup}>
                                        <label htmlFor='email'>Email</label>
                                        <input type='text' 
                                           className={styles.formControl} 
                                           id="email"
                                           name="email"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.email} 
                                           />
                                             {errors.email && touched.email && <span className={styles.errorHelp}>{errors.email}</span>}
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor='password'>Password</label>
                                        <input type='password' 
                                           className={styles.formControl} 
                                           id="password" 
                                           name="password"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.password}
                                           />
                                            {errors.password && touched.password && <span className={styles.errorHelp}>{errors.password}</span>}
                                    </div>
                                    <div className='text-center'>
                                        <button type='submit' className={styles.submitButton} disabled={isSubmitting}>Submit</button>
                                    </div>

                                </form>
                            )}
                        </Formik>

                      
                    </div>

                </div>
            </div>

        </Fragment>
    );
}
Login.layout = 'Main'
export default Login;