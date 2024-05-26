import { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [userDetail, setUserDetail] = useState({});

  // const getUser = () => {
  //   axios
  //   .get("https://reqres.in/api/users/")
  //   .then((res) => {
  //     console.log(res?.data);
  //     const response = res?.data;
  //     setUsers(response);
  //   })
  //   .catch((err) => {
  //     console.log(err?.response?.status);
  //     setError(err?.response.status.toString());
  //   });
  // };

  const getUsers = () => {
    axios.get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res?.data.data);
        setUsers(res?.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch users");
      });
  };

  const getUserDetail = () => {
    axios.get("https://reqres.in/api/users/2")
      .then((res) => {
        console.log(res?.data.data);
        setUserDetail(res?.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch user detail");
      });
  };

  useEffect(() => {
    getUsers();
    getUserDetail();
  }, []);

  return (
    <div>
      <h1>{userDetail.first_name}</h1>
      <img src={userDetail.avatar}/>
      {error.length ? (
        <h1>{error}</h1>
      ) : (
        users.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      )}
    </div>
  )

  // return (
  //   <div>
  //     {users.map((item) => (
  //       <div>
  //         <h1>{item?.email}</h1>
  //         <p>{item?.name}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
  // const [cars, setCars] = useState([]);
  // const [selectedBrand, setSelectedBrand] = useState('');

  // useEffect(() => {
  //   const carCollection = [
  //     { brand: 'Toyota', model: 'Corolla', year: 2020 },
  //     { brand: 'Honda', model: 'Civic', year: 2019 },
  //     { brand: 'Ford', model: 'Mustang', year: 2021 },
  //   ];
  //   setCars(carCollection);
  // }, []);

  // const handleCarClick = (brand) => {
  //   setSelectedBrand(brand);
  // };

  // return (
  //   <div>
  //     <h1>Merek Mobil</h1>
  //     <ul>
  //       {cars.map((car, index) => (
  //         <li key={index} onClick={() => handleCarClick(car.brand)}>
  //           {car.model}
  //         </li>
  //       ))}
  //     </ul>
  //     {selectedBrand && <p>Merek Mobil yang Dipilih: {selectedBrand}</p>}
  //   </div>
  // );
    // console.log(data);

    // return (
    //   <div>
    //     <h1>{false ? "single" : "menikah"}</h1>
    //   </div>
    // )
  // Pakai []di usetatenya useState([])
  //   {
  //     id: 1,
  //     company: "Toyota",
  //     brand: "Corolla",
  //   },
  //   {
  //     id: 2,
  //     company: "Honda",
  //     brand: "Civic",
  //   },
  //   {
  //     id: 3,
  //     company: "Nissan",
  //     brand: "Altima",
  //   },
  //   {
  //     id: 4,
  //     company: "Hyundai",
  //     brand: "Accent",  
  //   }
  // ])

  // return (
  //   <div>
  //     <h1>List of Cars</h1>
  //     <ul>
  //       {data.map(car => (
  //         <li key={car.id}>
  //           Company: {car.company}, Brand: {car.brand}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
};

export default App

//1. isi atau update value state dengan data koleksi mobil
//2. render, tampilkan data brand saja