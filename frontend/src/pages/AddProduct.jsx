import styles from './styles/AddProduct.module.css';
import { useState } from 'react';
import Inputbox from '../components/Inputbox';
import { Mail } from 'lucide-react';
import Buttonnormal from '../components/Buttonnormal';
import SelectInput from '../components/SelectInput';
import { CATEGORY } from '../assets/constant';
import { createProduct } from '../api/product.api'; // typo corrected (was creatProduct)

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    desc: '',
    quantity: '',
    category: 'Others',
    file: null, // file should be initialized in formData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      file: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('productName', formData.productName);
    data.append('desc', formData.desc);
    data.append('quantity', formData.quantity);
    data.append('category', formData.category);
    console.log(formData.file)
    if (formData.file) {
      data.append('file', formData.file); // assuming your backend expects field 'img'
    }

    try {
      const res = await createProduct(data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="authpage">
      <form onSubmit={handleSubmit}>
        <div className={styles.imageUploadContainer}>
          <label className={styles.imageUploadLabel}>Product Image</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className={styles.imageUploadInput}
          />
        </div>

        <Inputbox
          labeltext={"productName"}
          type={"text"}
          placeholder={"Enter Product Name"}
          handleChange={handleChange}
          icon={Mail}
        />
        <Inputbox
          labeltext={"desc"}
          type={"textarea"}
          placeholder={"Enter Description"}
          handleChange={handleChange}
          icon={Mail}
        />
        <Inputbox
          labeltext={"quantity"}
          type={"number"}
          placeholder={"Enter Quantity"}
          handleChange={handleChange}
          icon={Mail}
        />
        <SelectInput
          handlechange={handleChange}
          value={formData.category}
          selectvalue={CATEGORY}
          labeltext={"category"}
        />
        <Buttonnormal
          text={"Add"}
          type={"submit"}
          loading={false}
        />
      </form>
      <div></div>
    </div>
  );
}
