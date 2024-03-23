import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [license, setLicense] = useState(null); // Состояние для Лицензии пилота
  const [medicalCertificate, setMedicalCertificate] = useState(null); // Состояние для Медицинской справки
  const [result, setResult] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleLicenseChange = (event) => {
    setLicense(event.target.files[0]);
  };

  const handleMedicalCertificateChange = (event) => {
    setMedicalCertificate(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      // Проверка на соответствие паролей
      if (password !== confirmPassword) {
        setResult('Пароли не совпадают');
        return;
      }

      // Отправка данных на сервер для регистрации
      const formData = new FormData();
      formData.append('username', email);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone_number', phone);
      formData.append('first_name', firstName);
      formData.append('last_name', surname);
      formData.append('license', license); // Добавление Лицензии пилота в FormData
      formData.append('medical_certificate', medicalCertificate); // Добавление Медицинской справки в FormData
      
      const response = await fetch(`http://localhost/test/register.php`, {
        method: 'POST',
        body: formData
      });
      const responseData = await response.text();

      // Обработка ответа от сервера
      setResult(responseData);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <div className="registration-form">
      <input type="text" placeholder="Имя" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" placeholder="Фамилия" value={surname} onChange={handleSurnameChange} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
      <input type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      <input type="text" placeholder="Телефон" value={phone} onChange={handlePhoneChange} />
      <input type="file" onChange={handleLicenseChange} /> {/* Поле для загрузки Лицензии пилота */}
      <input type="file" onChange={handleMedicalCertificateChange} /> {/* Поле для загрузки Медицинской справки */}

      <button onClick={handleSubmit}>Зарегистрироваться</button>

      <div>{result}</div>
    </div>
  );
}

export default SignUp;
