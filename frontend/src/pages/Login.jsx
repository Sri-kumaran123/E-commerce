import Inputbox from "../components/Inputbox";
import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import Buttonnormal from "../components/Buttonnormal";
import Formbottom from "../components/Formbottom";
import useLoginHook from "../hooks/useLoginHook";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loading, hookFunction} = useLoginHook();

  const handlSubmit = (e) =>{
    e.preventDefault();
    hookFunction({email,password});
  }
  return (
    <div className="authpage">
      <form onSubmit={handlSubmit}>
        <Inputbox 
          placeholder="Enter Email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
          labeltext="Email"
          icon={Mail}
        />
        <Inputbox 
          placeholder="Enter Password"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
          labeltext="Password"
          icon={Lock}
        />
        <Buttonnormal
          text={"Login"}
          type={"submit"}
          loading = {loading}
        />

        <Formbottom
          text={"Do not have a account"}
          textto={"Signup"}
          path={"/register"}
        />
      </form>
    </div>
  );
}
