import { useState } from "react";
import {FaSortDown, FaSortUp, FaSort} from "react-icons/fa"
export default function Table({ head, body, searchable }) {

  const [sorting, setSorting] = useState(false);
  const [search, setSearch] = useState("");
  const filteredData = body.filter(
    items => items.some(item => (item?.key || item).toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR')))  
    ).sort((a,b) => {
      if(sorting?.orderBy === 'asc') {
        return a[sorting.key].toString().localeCompare(b[sorting.key])
      }
      if(sorting?.orderBy === 'desc') {
        return b[sorting.key].toString().localeCompare(a[sorting.key])
      }
    })

  return (
    <>
      {searchable && (
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="input-group-prepend "
          />
          {sorting && (
          <button 
          onClick={()=> setSorting({})}
          className="btn btn-outline-danger btn-sm m-4 ">
            Siralamayi iptal et 
            </button>

          )}
        </div>
      )}
      {search}
      <div className="table-responsive-md">
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              {head.map((h, key) => (
                <th
                 key={key}>
                 <div className="d-flex text-center m-2">
                 {h.name}
                  {h.sortable && (
                    <button onClick={() => {
                     if(sorting?.key === key) {
                      setSorting({
                        key,
                        orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
                      })
                     } else {
                      setSorting({
                        key,
                        orderBy: 'asc'
                      })
                     }
                    }}>
                      {sorting?.key === key && (
                          sorting.orderBy === 'asc' ? <FaSortDown size={14} /> : <FaSortUp size={14} />
                      )}
                      {sorting?.key !== key && <FaSort size={14} /> }

                      
                    </button>
                  )}
                 </div>
                  </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((items, key) => (
              <tr key={key.email}>
                {items.map((item, key) => (
                  <td 
                  key={key}>
                    {Array.isArray(item) ? (
                      <div>
                        {item}
                      </div>
                    ): item}
                    </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

