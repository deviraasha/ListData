import React, { useRef, useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { name, id, description, image, origin, life_span, temperament, vcahospitals_url } = faq;

  console.log("image",vcahospitals_url );
  return (
    <div className="rc-accordion-card bg-white mb-5">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <div className="flex flex-row">
            <img
              src={
                image === undefined
                  ? "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  : image.url
              }
              className="rounded w-32 h-20 mr-9"
              alt="Avatar"
            />
            <div className="flex flex-col">
              <div className="flex flex-row">
                <span className="w-20 text-md font-semibold">Name</span>
                <span className="w-4 text-md font-semibold">: </span>
                <span className="">{name}</span>
              </div>

              <div className="flex flex-row">
                <span className="w-20 text-md font-semibold">Origin</span>
                <span className="w-4 text-md font-semibold">: </span>
                <span className="">{origin}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0 text-blue-600">{description}</p>
          <p>Can life for {life_span}</p>
          <p>
            <b>Character :</b> {temperament}
          </p>
          {/* <Link to={vcahospitals_url}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More Detail
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          </Link>
           */}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
