import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../UseHooks/UseAuth';

const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = UseAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <input placeholder='adress' defaultValue='' {...register("adress")} />
      <input placeholder='phone' defaultValue='' {...register("phone")} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default PlaceOrder;