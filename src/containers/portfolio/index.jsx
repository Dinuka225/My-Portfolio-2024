import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: image1,
    link: "",
  },
  {
    id: 3,
    name: "GYM",
    image: image2,
    link: "",
  },
  {
    id: 4,
    name: "Burgur shop",
    image: image3,
    link: "",
  },
  {
    id: 5,
    name: "Portfolio",
    image: image4,
    link: "",
  },
];

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

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <div>
      <section id="portfolio" className="portfolio">
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
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </dir>
      </section>
    </div>
  );
};

export default Portfolio;
