import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import AccordionItem from './AccordionItem'

function ListingPageContainer() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/breeds?limit=10&page=${currPage}`
      );
      //   console.log(response.data, "dataa");
      if (!response.data.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  if (userList.length === 0) {
    return (
      <><svg aria-hidden="true" role="status" className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
      </svg>
      Loading...</>
    )
  }

  return (
    <>
    <div className="bg-white my-8 rounded-md">
      <div className="flex flex-col px-8 items-center">
    <input
        placeholder="Cari nama ..."
        className="mt-5 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(event) => setQuery(event.target.value)}
      />
        <div
          onScroll={onScroll}
          ref={listInnerRef}
          className="block p-6 rounded-lg "
          style={{ height: "550px", overflowY: "auto" }}
        >
          {userList
            .filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => (
              <div className="box" key={index}>
                <AccordionItem
                  key={index}
                  active={active}
                  handleToggle={handleToggle}
                  faq={post}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
    
    </>
  );
}

export default ListingPageContainer;
