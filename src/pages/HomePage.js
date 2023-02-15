import CompanyTable from "../apps/profile/components/CompanyTable";
import { useState ,useEffect} from "react";
import { Pagination } from "antd";
import { Navigate, useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => [
    {
			companyName: 'Amazon',
			IncorporationCountry: 'USA',
			CompanyLegalNumber:'095654642546',
			Website: 'www.amazon.com'
		},
		{
      companyName: 'Apple',
			IncorporationCountry: 'USA',
			CompanyLegalNumber:'1243214324123',
			Website: 'www.apple.com'
		},
		{
      companyName: 'Shell',
			IncorporationCountry: 'England',
			CompanyLegalNumber:'2134234321543',
			Website: 'www.shell.com'
		},
		{
      companyName: 'Volkswagen',
			IncorporationCountry: 'Germany',
			CompanyLegalNumber:'3598213121263',
			Website: 'www.volkswagen.com'
		},
    {
      companyName: 'Microsoft',
			IncorporationCountry: 'USA',
			CompanyLegalNumber:'87534534534534',
			Website: 'www.microsoft.com'
		},
   
  ]);

 
  const handleExport = () => {
    console.log(users);
  }
  return (
    <div className="p-4">
      <CompanyTable
        searchable={true}
        head={[
          {name : 'Company Name', sortable: true},
          { name: "Incorporation Country", sortable: true  },
          { name: "Company Legal Number", sortable: true },
          {name: 'Website', sortable: true}
        ]}
        body={
          users &&
          users.map((user, key) => [
            user.companyName,
            user.IncorporationCountry,
            user.CompanyLegalNumber,
            user.Website,
            [
              <div>
                <button className="btn btn-primary btn-lg btn-block text-center m-2">
                  Düzenle
                </button>
                
                <button
                  onClick={() => {
                    const tmpUsers = [...users];
                    tmpUsers.splice(key, 1);
                    setUsers(tmpUsers);
                  }}
                  className="btn btn-danger btn-lg btn-block text-center m-2"
                >
                  Sil
                </button>
                <button
              type="submit"
              className="btn btn-primary m-4"
              onClick={handleExport}>        
              Export Excel 
            </button>  
              </div>
            ],
          ])
        }
      />
       
    </div>
  );
};

export default HomePage;
