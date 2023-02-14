import Table from "../apps/profile/components/CompanyTable";
import {useState} from "react";
import { Pagination } from 'antd';

const HomePage = () => {
  
  const [company, setCompany] = useState(() => [
		{
			companyName: 'Amazon',
			IncorporationCountry: 'USA',
			CompanyLegalNumber:'amazon@gmail.com',
			Website: 'www.amazon.com'
		},
		{
      companyName: 'Apple',
			IncorporationCountry: 'USA',
			CompanyLegalNumber:'apple@gmail.com',
			Website: 'www.apple.com'
		},
		{
      companyName: 'Shell',
			IncorporationCountry: 'England',
			CompanyLegalNumber:'shell@gmail.com',
			Website: 'www.shell.com'
		},
		{
      companyName: 'Volkswagen',
			IncorporationCountry: 'Germany',
			CompanyLegalNumber:'volkswagen@gmail.com',
			Website: 'www.volkswagen.com'
		},
    {
      companyName: 'Microsoft',
			IncorporationCountry: 'USA',
			CompanyLegalNumber:'microsoft@gmail.com',
			Website: 'www.microsoft.com'
		},
	])

  return (
    <div>
   
      <Table
        searchable={true}
        head={[
          {name : 'Company Name', sortable: true},
          {name : 'Incorporation Country', sortable: true},
          {name : 'Company Legal Number', sortable: true},
          {name: 'Website', sortable: true}
        ]}
        body={company && company.map((company,key) => ([
          <div key={`${company.companyName} ${company.IncorporationCountry}`}>{company.companyName} {company.IncorporationCountry}</div>,
					company.CompanyLegalNumber,
					<div searchableText={`Website ${company.Website}`}>{company.Website}</div>,
        [
          <div>
          <button className="btn btn-primary btn-lg btn-block text-center m-2">Düzenle</button>,
          <button onClick={()=> {
            const tmpCompany = [...company]
            tmpCompany.splice(key, 1)
            setCompany(tmpCompany)
          }} className="btn btn-danger btn-lg btn-block text-center m-2">Sil</button>
          </div>
        ]
      ]))}
      />
    </div>
   
  );
};

export default HomePage;
