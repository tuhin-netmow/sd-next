import React, {useState} from 'react';

export default function HomeTemplates ({ items }) {
  const [activeFilter, setActiveFilter] = useState('All');
  //console.log(items);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === 'All' ? items : items.filter(item => item.sport === activeFilter);

  return (
    <>
      <section className="sd-templates">
        <div className="container">
            <div className="section-heading">
                <h3>Get a free website now</h3>
                <h2>Obtain and Handle a Complimentary Website featuring a Variety of Vibrant Templates.</h2>
            </div>
            <div className="sd-templates-tab-nav">
                <button onClick={() => handleFilterClick('All')} className={`filter_btn ${activeFilter === "All" ? 'tab-active' : ''}`}>All</button>
                <button onClick={() => handleFilterClick('Rugby')} className={`filter_btn ${activeFilter === "Rugby" ? 'tab-active' : ''}`}>Rugby</button>
                <button onClick={() => handleFilterClick('Basketball')} className={`filter_btn ${activeFilter === "Basketball" ? 'tab-active' : ''}`}>Basketball</button>
                <button onClick={() => handleFilterClick('Football')} className={`filter_btn ${activeFilter === "Football" ? 'tab-active' : ''}`}>Football</button>
                <button onClick={() => handleFilterClick('Karate')} className={`filter_btn ${activeFilter === "Karate" ? 'tab-active' : ''}`}>Karate</button>
            </div>
            <div className="sd-templates-tab-content">
              {filteredItems.map((item, index) => (
                <div key={index} className={`tab_item ${activeFilter !== 'All' ? 'hidden' : ''}`}>
                  <img src={item.image} alt={item.sport} />
                </div>
              ))}
            </div>
        </div>
    </section>

    </>
  )
}
