import { Login } from './Login';

const Login1 = () => {
  return (
    <div className='flex justify-between text-center sm:mt-[5px] w-[1340px]'>
      <Login />
      <div className='w-[50%] mt-32'>
        <img src="/img/login.svg" alt="login"  />
      </div>
    </div>
  )
}

export default Login1;