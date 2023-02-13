import { useState } from "react";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";
import MobilePhone from "./MobilePhone";
export default function Table({ head, body, searchable }) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

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
              onClick={() => setSorting(false)}
              className="btn btn-outline-danger btn-sm m-4 "
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
                    <div className="d-flex text-center m-2">
                      {h.name}
                      {h.sortable && (
                        <button
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
            <nav aria-label="...">
              <ul className="pagination pagination-lg">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              <a href="/productpage" className="btn-submit">
                Go to products page
              </a>
            </button>{" "}
          </div>
        </div>
      )}
    </>
  );
}
