import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import DisplayComponent from "./DisplayComponent";
function Home() {
  const [stockData, setStockData] = useState([]);
  const [selectCountry, setSelectCountry] = useState([]);
  const [displayData, setDisplayData] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://www.gov.uk/bank-holidays.json");
    const data = await response.json();
    const dataArray = [];
    for (const key in data) {
      dataArray.push(data[key].events);
    }
    setStockData(dataArray);
  };
  return (
    <Container>
      <h1>Invest With Tribe</h1>
      <select
        onChange={(e) => {
          setSelectCountry(e.target.value);
          setDisplayData(true);
        }}
      >
        <option value="england">England</option>
        <option value="scotland">scotland</option>
        <option value="ireland">ireland</option>
      </select>
      <Box>
        {/* {stockData.map((el) => {
          return (
            <div>
              <p>{el.title}</p>
              <p>{el.data}</p>
            </div>
          ); {

          displayData?():()
        }
        })} */}
        {displayData ? (
          selectCountry === "scotland" ? (
            <DisplayComponent data1={stockData[1]} />
          ) : selectCountry === "ireland" ? (
            <DisplayComponent data1={stockData[2]} />
          ) : (
            <DisplayComponent data1={stockData[0]} />
          )
        ) : (
          ""
        )}
      </Box>
    </Container>
  );
}
export default Home;
const Container = styled.div`
  width: 100%;
  margin-left: 200px;
`;
const Box = styled.div`
  display: flex;
  width: 800px;
  backgroud-color: blue;
`;
