import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Css/common.css";

import Block from "./component/block.jsx";

import {getData} from "./Api/Api.js"

export default function App() {
  const [search,setSearch]=useState(" ")
  const [byFilter, setByFilter] = useState({
    all: "active",
    trending: false,
    mostPopular: false,
    hrtrending: false,
    latest: false,
    intemple: false,
  });
  const [cardData, setCardData] = useState([
    { title: "Tile", subtitle: "subTitle" ,category:[]}
 
  ]);

  useEffect(() => {
    const getFileData = async () => {

const isData=await getData();



setCardData(isData.data)
console.log("ada",cardData);
    };

    getFileData();
  },[]);

  const setActive = (e) => {
    setByFilter({
      all: false,
      trending: false,
      mostPopular: false,
      hrtrending: false,
      latest: false,
      intemple: false,
    });
    setSearch(e.target.name)

    setByFilter({ [e.target.name]: "active" });
    console.log(">>>>",search);
  };

  return (
    <>
      <div className="frontPage my-scroll">
        <div className="container">
          <h2>Live Space</h2>
          <br/>
          <i class="bi bi-check-circle-fill"></i>  All NFT on cyber either  belog to or were  minted by their space  creater
          <div className="filter">
            <div>
              <button
                className={` ${byFilter.all}`}
                onClick={setActive}
                name="all"
              >
                <i class="bi bi-recycle"></i> All
              </button>
            </div>
            <div>
              <button
                className={` ${byFilter.trending}`}
                onClick={setActive}
                name="trending"
              >
                Trending
              </button>
            </div>
            <div>
              <button
                className={` ${byFilter.mostPopular}`}
                onClick={setActive}
                name="mostPopular"
              >
                Most pupular
              </button>
            </div>{" "}
            <div>
              <button
                className={` ${byFilter.hrtrending}`}
                onClick={setActive}
                name="hrtrending"
              >
                24 Hr Trending
              </button>
            </div>{" "}
            <div>
              <button
                className={` ${byFilter.latest}`}
                onClick={setActive}
                name="latest"
              >
                Latest
              </button>
            </div>{" "}
            <div>
              <button
                className={` ${byFilter.intemple}`}
                onClick={setActive}
                name="intemple"
              >
                In Temple
              </button>
            </div>{" "}
          </div>
          <br />

          {/*=================== Cards start======================== */}
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
            {cardData.filter((i)=>{
              console.log(i.category.includes(search)+" "+i.category)
             if(search==" " || search=="all"){
               return i
             }else if(i.category.includes(search)){
               
               return i
             }




            }).map((item) => {
              return (
                <>
                
                 <Block data={item}/>
                                    </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
