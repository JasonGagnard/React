import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormInscription = () => {

    const { handleSubmit, watch, register } = useForm();
    const onSubmit = values => console.log(values);

    useEffect(() => {

        const subscription = watch(observer => { });
    }, [watch]);

    return (
        <>
            <h1>INSCRIPTION</h1>

            <form OnSubmit={handleSubmit(onSubmit)}>
                <p>
                    <label>Email : </label>
                    <input type="text" {...register('email')} />
                </p>
                <p>
                    <label>Mot de passe : </label>
                    <input type="password" {...register('password')} />
                </p>

                <p>
                    <input type="checkbox" value="condition" {...register('condition')} /> Accepter les conditions d'utilisation
                </p>
                <p>
                    <input type="submit" />
                </p>
            </form>
        </>
    )
};

export default FormInscription;