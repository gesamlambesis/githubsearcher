import React, { useState } from "react";
import assets from "assets";
import {
  Label,
  InputContainer,
  InputSearcher,
  SearchButton,
  ProtipsContainer,
  SearcherContainer,
  Wrapper,
  IconContainer,
} from "./styles";

const { Lupa } = assets;

const Searcher = ({ searchUser }) => {
  const [search, setSearcher] = useState("");

  return (
    <SearcherContainer>
      <Wrapper>
        <div style={{ display: "flex" }}>
          <IconContainer>
            <Lupa />
          </IconContainer>
          <Label>
            Search more than <span>220M</span> repositories
          </Label>
        </div>

        <InputContainer>
          <InputSearcher
            type="text"
            placeholder="Search Github"
            onChange={(e) => {
              setSearcher(e.target.value);
            }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && search !== "") {
                searchUser(search);
              }
            }}
          />
          <SearchButton
            onClick={() => {
              if (search !== "") {
                searchUser(search);
              }
            }}
          >
            Search
          </SearchButton>
        </InputContainer>

        <ProtipsContainer>
          <h2>
            {" "}
            <span>ProTip!</span> For an{" "}
            <a href="https://github.com/search/advanced">advanced search</a>,
            use some of our prefixes.
          </h2>
        </ProtipsContainer>
      </Wrapper>
    </SearcherContainer>
  );
};

export default Searcher;
