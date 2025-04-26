import Inputbox from "../components/Inputbox";
import { Mail, Lock, User } from 'lucide-react';
import { useState } from 'react';
import Buttonnormal from "../components/Buttonnormal";
import Formbottom from "../components/Formbottom";
import SelectInput from "../components/SelectInput";
import { SELECT_REGISTER_VALUES } from "../assets/constant";

export default function Signup({manage}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    
    const handlSubmit = (e) =>{
        
    }
    const handleSelect = (e) =>{

    }

    return <div className="authpage">
        <form>
        <Inputbox 
          placeholder="Enter Email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
          labeltext="Email"
          icon={Mail}
        />
        <Inputbox 
          placeholder="Enter user name"
          type="text"
          handleChange={(e) => setUserName(e.target.value)}
          labeltext="Username"
          icon={User}
        />
        {manage?
        <SelectInput
            labeltext={"Select one"}
            selectvalue={SELECT_REGISTER_VALUES}
            handlechange={handleSelect}
        />
        :null}
        
        <Inputbox 
          placeholder="Enter Password"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
          labeltext="Password"
          icon={Lock}
        />
        
        <Buttonnormal
          text={"Register"}
          handlsubmit={handlSubmit}
          type={"submit"}
        />
        <Formbottom
          text={"Already have a Account"}
          textto={"Login"}
          path={"/login"}
        />
        </form>
        
    </div>
}