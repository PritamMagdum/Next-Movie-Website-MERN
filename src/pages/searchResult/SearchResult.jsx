import React, { useEffect, useState } from "react";
import "./SearchResult.scss";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data.results.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.total_results > 1 ? "Results" : "Result"
                } of '${query}'`}
              </div>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results Not Found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
