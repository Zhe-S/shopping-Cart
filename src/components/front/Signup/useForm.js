import {useState, useEffect } from "react";
import validation from "./validation"

const useForm = (submitForm)=>{
    const [values, setValues] = useState({
      fullname:"",
      email:"",
      password:"",
    });
  
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
  
  
    const handleChange = (event) => {  // 用于改变数值
      setValues({
        ...values,       // 获得每个字段的值
        [event.target.name]: event.target.value, //把值分配给每一个 比方说 名字 邮箱或者密码
      })
    }
    const handleFormSubmit = (event) => { // 阻止，默认点击事件
      event.preventDefault();
      setErrors(validation(values));//就是说，修改为一个值。这个值就是带着<p>的提示，但是如果没有错误的话 自然就取消了这行<p>,换个说法 写了这行就多了一个红色警告，如果输入无错 就没有提醒了 
      setDataIsCorrect(true);  
    };

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
          submitForm(true)
        }
    },[errors]);

    return {handleChange, handleFormSubmit, errors, values };

};

export default useForm;