import Table from "../components/Table";
import {useState} from "react";

const HomePage = () => {
  
  const [users, setUsers] = useState(() => [
		{
			name: 'Tayfun',
			surname: 'Erbilen',
			email: 'te@gmail.com',
			age: 29
		},
		{
			name: 'Mehmet',
			surname: 'Seven',
			email: 'mseven@gmail.com',
			age: 29
		},
		{
			name: 'Gökhan',
			surname: 'Kandemir',
			email: 'gkandemir@gmail.com',
			age: 35
		},
		{
			name: 'Ahmet',
			surname: 'Tarık G.',
			email: 'atg@gmail.com',
			age: 24
		}
	])

  return (
    <div>
   
      <Table
        searchable={true}
        head={[
          {name : 'Ad-Soyad', sortable: true},
          {name : 'E-posta'},
          {name : 'Yas', sortable: true},
          {name: 'İslemler'}
        ]}
        body={users.map((user,key) => ([
          <div key={`${user.name} ${user.surname}`}>{user.name} {user.surname}</div>,
					user.email,
					<div searchableText={`Yaş ${user.age}`}>{user.age}</div>,
        [
          <div>
          <button className="btn btn-primary btn-lg btn-block text-center m-2">Düzenle</button>,
          <button onClick={()=> {
            const tmpUsers = [...users]
            tmpUsers.splice(key, 1)
            setUsers(tmpUsers)
          }} className="btn btn-danger btn-lg btn-block text-center m-2">Sil</button>
          </div>
        ]
      ]))}
      />
    </div>
   
  );
};

export default HomePage;
