import CompanyTable from "../apps/profile/components/CompanyTable";
import { useState } from "react";
import { Pagination } from "antd";

const ProductPage = () => {
  
  const [users, setUsers] = useState(() => [
    {
      ProductName: 'İphone 14',
      ProductCategory : 'Telephone',
			ProductAmount:'100',
			AmountUnit: "50.000 TL",
      Company: 'USA'
		},
		{
      ProductName: 'Dell',
			ProductCategory: 'Computer',
			ProductAmount:'5000',
			AmountUnit: '30.000TL',
      Company: 'England'

		},
		{
      ProductName: 'Marti',
			ProductCategory: 'Scooter',
			ProductAmount:'100000',
			AmountUnit: '40.000TL',
      Company: 'Turkey'

		},
		{
      ProductName: 'Airfryer',
			ProductCategory: 'Kitchen',
			ProductAmount:'12500',
			AmountUnit: '10.000TL',
      Company: 'USA'

		}
    
  ]);

  return (
    <div className="p-4">
      <CompanyTable
        searchable={true}
        head={[
          {name : 'Product Name', sortable: true},
          { name: "Product Category", sortable: true  },
          { name: "Product Amount"},
          {name: 'AmountUnit', sortable: true},
          {name: 'Company', sortable: true}

        ]}
        body={
          users &&
          users.map((user, key) => [
            user.ProductName,
            user.ProductCategory,
            user.ProductAmount,
            user.AmountUnit,
            user.Company,
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
                
              </div>
            ],
          ])
        }
      />
    </div>
  );
};

export default ProductPage;
