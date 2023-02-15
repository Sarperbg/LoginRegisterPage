import { useContext, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";
import MobilePhone from "./MobilePhone";
import { Pagination } from "antd";
import FirebaseContext from "../../../context/FirebaseContext";

import styles from "../styles/companyTable.module.css";
export default function Table({ head, body, searchable }) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const navigate = useNavigate();
  const { register } = useContext(FirebaseContext);
  
  const [sorting, setSorting] = useState(false);
  const [search, setSearch] = useState("");
  const filteredData =
    body &&
    body
      .filter((items) =>
        items.some((item) =>
          (item?.key || item?.props?.searchableText || item)
            .toString()
            .toLocaleLowerCase("TR")
            .includes(search.toLocaleLowerCase("TR"))
        )
      )
      .sort((a, b) => {
        if (sorting?.orderBy === "asc") {
          return (
            a[sorting.key]?.key ||
            a[sorting.key]?.props?.searchableText ||
            a[sorting.key]
          )
            .toString()
            .localeCompare(
              b[sorting.key]?.key ||
                b[sorting.key]?.props?.searchableText ||
                b[sorting.key]
            );
        }
        if (sorting?.orderBy === "desc") {
          return b[sorting.key].toString().localeCompare(a[sorting.key]);
        }
      });

  if (!body || body?.length === 0) {
    return (
      <div class="col text-center">
        <div className="btn btn-warning btn-lg btn-block">
          Gösterilecek veri bulunmuyor.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.companyTable_container}>
      {searchable && (
        <div className={styles.main_container}>
          <div class="input-group">
            <div class="form-outline">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="input-group-prepend "
              />{" "}
              <label class="form-label" for="form1"></label>
              <button type="button" class="btn btn-primary">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {sorting && (
            <button
              onClick={() => setSorting(false)}
              className="btn btn-outline-danger btn-sm m-4"
            >
              Siralamayi iptal et
            </button>
          )}
        </div>
      )}
      {isMobile && <MobilePhone head={head} body={filteredData} />}
      {!isMobile && (
        <div className="table-responsive-md">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                {head.map((h, key) => (
                  <th key={key}>
                    <div className="d-flex text-center mt-2">
                      {h.name}
                      {h.sortable && (
                        <button
                          className="mx-auto"
                          onClick={() => {
                            if (sorting?.key === key) {
                              setSorting({
                                key,
                                orderBy:
                                  sorting.orderBy === "asc" ? "desc" : "asc",
                              });
                            } else {
                              setSorting({
                                key,
                                orderBy: "asc",
                              });
                            }
                          }}
                        >
                          {sorting?.key === key &&
                            (sorting.orderBy === "asc" ? (
                              <FaSortDown size={14} />
                            ) : (
                              <FaSortUp size={14} />
                            ))}
                          {sorting?.key !== key && <FaSort size={14} />}
                        </button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData &&
                filteredData.map((items, key) => (
                  <tr key={key.email}>
                    {items.map((item, key) => (
                      <td key={key}>
                        {Array.isArray(item) ? <div>{item}</div> : item}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>

          <div>
            <Pagination defaultCurrent={1} total={60} />
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary m-4"
              onClick={(e) => {
                e.preventDefault();
                navigate("/productpage");
              }}
            >
              Go to Product Page
            </button>{" "}
            
          </div>
        </div>
      )}
    </div>
  );
}