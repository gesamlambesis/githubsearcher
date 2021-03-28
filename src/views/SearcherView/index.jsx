import React, { useState } from "react";
import Header from "components/header";
import Paginator from "components/paginator";
import UserCard from "components/userCard";
import Searcher from "components/searcher";
import LeftSideMenu from "components/leftSideMenu";
import Footer from "components/footer";
import { useHistory } from "react-router-dom";
import { PaginatorContainer, Content, UserContainer } from "./styles";

const getPagination = (userTotal, perPage) => {
  if (userTotal > 1000) {
    return 100;
  } else {
    return Math.ceil(userTotal / perPage);
  }
};

const SearcherView = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [totalUsers, setTotalUsers] = useState(0);
  const [pagination, setPagination] = useState({
    total_pages: 0,
    page: 0,
    per_page: 10,
  });
  const searchUser = async (userToSearch, page) => {
    debugger;
    const response = await fetch(
      `https://api.github.com/search/users?q=${userToSearch}&page=${
        Number.isInteger(page) ? page : 1
      }&per_page=10`
    );
    const userData = await response.json();
    if (userData) {
      getUsers(userData.items);
      setTotalUsers(userData.total_count);
       debugger;

      if (
        userData.total_count &&
        userData.total_count > 1 &&
        pagination.page === 0
      ) {
        const githubPagination = getPagination(
          userData.total_count,
          pagination.per_page
        );
        setPagination({
          total_pages: githubPagination,
          page: 1,
          per_page: 10,
        });
      }

      if (pagination.page > 0) {
        setPagination({
          ...pagination,
          page,
        });
        window.scrollTo(0, 0)
      }
    }

    const params = new URLSearchParams();
    if (userToSearch) {
      params.append("search", userToSearch);
    } else {
      params.delete("search");
    }
    history.push({ search: params.toString() });
  };

  async function getUsers(users) {
    let jobs = [];

    for (let user of users) {
      let job = fetch(user.url).then(
        (successResponse) => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        (failResponse) => {
          return null;
        }
      );
      jobs.push(job);
    }

    let results = await Promise.all(jobs);
    setUsers(results);


  }

  return (
    <div>
      <Header />
      {users.length === 0 && (
        <Searcher
          searchUser={(userToSearch) => {
            searchUser(userToSearch, 1);
            setCurrentUser(userToSearch);
          }}
        />
      )}

      {users.length > 0 && (
        <Content>
          <LeftSideMenu 
            userQuantity={totalUsers}
          />

          <UserContainer>
            <h3>{`${totalUsers} user`}</h3>

            {users.map((user) => (
              <div>
                <UserCard userData={user} />
              </div>
            ))}

            {pagination.total_pages > 0 && (
              <PaginatorContainer>
                <Paginator
                  totalPages={pagination.total_pages}
                  currentPage={pagination.page}
                  onChange={(page) => {
                    searchUser(currentUser, page);
                  }}
                  pagesToShow={3}
                  showMoreContent
                />
              </PaginatorContainer>
            )}
          </UserContainer>
        </Content>
      )}
      <Footer />
    </div>
  );
};

export default SearcherView;
