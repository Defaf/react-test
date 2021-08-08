import render from 'dom-serializer';
import React,{Component} from 'react';
import  {Link,BrowserRouter} from "react-router-dom";
import '../CSS/Projects.css';
import img1 from "../images/Image_1.png";
import img2 from "../images/Image_2.png";
import img3 from "../images/Image_5.png";


function Projects() {
       return (
         <BrowserRouter>
        <div>
          <div>
              <h3>مشاريعنا</h3>
              <lu>
                  <li>
                  <Link target="_blank"from="/Projects"  to= "Projects" rel="noreferrer noopener"> 
                    <div class="card">
                        <img src={img2} height={200} width={200} />
                        <div class="container"><p class="sizefont">مشروع 3</p></div>
                    </div>
                  </Link>
                  </li>

                  <li>
                  <Link target="_blank"from="/Projects"  to= "Projects" rel="noreferrer noopener"> 
                    <div class="card">
                        <img src={img2} height={200} width={200} />
                        <div class="container"><p class="sizefont">مشروع 2</p></div>
                    </div>
                  </Link>
                  </li>

                  <li>
                  <Link target="_blank"from="/Projects"  to= "Projects" rel="noreferrer noopener"> 
                    <div class="card">
                        <img src={img1} height={200} width={200} />
                        <div class="container"><p class="sizefont">مشروع 1</p></div>
                    </div>
                    </Link>
                  </li>
              </lu>
              
          </div>

          <div class="row2">
             <lu>
                  <li>
                    <h4>قريبا</h4>
                    <div class="card">
                        <img src={img3} height={200} width={200} />
                        <div class="container"><p class="sizefont">مشروع 5</p></div>
                    </div>
                  </li>

                  <li>
                    <h4>قريبا</h4>
                    <div class="card">
                        <img src={img3} height={200} width={200} />
                        <div class="container"><p class="sizefont">مشروع 4</p></div>
                    </div>
                  </li>
                </lu>
          </div>
        
        </div> 
        </BrowserRouter>
       );
    }

export default Projects;
