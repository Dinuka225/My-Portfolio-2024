import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";
import { motion } from "framer-motion";
import portfolioData from "../../components/utils/portfolioData";


const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setfilteredvalue] = useState(1);
  const [hoverValue, sethoverValue] = useState(null);

  function handleFilter(currentId) {
    setfilteredvalue(currentId);
  }

  function handleHover(index) {
    sethoverValue(index);
  }

  const handleClick = (link) => {
    window.location.href = link;
  };

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <div>
      <motion.section
        id="portfolio"
        className="portfolio"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: Window.innerWidth, transition: { duration: 0.5 } }}
      >
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<GrProjects size={40} />}
        />
        <dir className="portfolio_content">
          <ul className="portfolio_content_filter">
            {filterData.map((item) => (
              <li
                className={item.filterId === filteredvalue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio_content_cards">
            {filteredItems.map((item) => (
              <div
                className="portfolio_content_cards_item"
                key={item.id}
                onMouseEnter={() => handleHover(item.id)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio_content_cards_item_img-wrapper">
                  <a>
                    <img src={item.image} alt="portfolio-data" />
                  </a>
                </div>

                <div className="overlay">
                  {item.id === hoverValue && (
                    <div>
                      <p>{item.name}</p>
                      <button onClick={() => handleClick(item.link)}>
                        Visit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </dir>
      </motion.section>
    </div>
  );
};

export default Portfolio;
