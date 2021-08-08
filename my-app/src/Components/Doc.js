import render from 'dom-serializer';
import React,{Component} from 'react';
import  {Link,BrowserRouter} from "react-router-dom";
import '../CSS/Projects.css';
import img1 from "../images/Image_1.png";
import img2 from "../images/Image_2.png";

class Doc extends React.Component {      
  
    render () {
       return (
        <BrowserRouter>
          <div>
              <h3>التوثيق</h3>
              <lu>
                  <li>
                  <Link target="_blank"from="/Doc"  to= "Doc" rel="noreferrer noopener"> 
                    <div class="card">
                        <img src={img2} height={200} width={200} />
                        <div class="container"><p class="sizefont">التوثيق 3</p></div>
                    </div>
                    </Link>
                  </li>

                  <li>
                  <Link target="_blank"from="/Doc"  to= "Doc" rel="noreferrer noopener"> 
                    <div class="card">
                        <img src={img2} height={200} width={200} />
                        <div class="container"><p class="sizefont">التوثيق 2</p></div>
                    </div>
                  </Link>
                  </li>

                  <li>
                  <Link target="_blank"from="/Doc"  to= "Doc" rel="noreferrer noopener"> 
                    <div class="card">
                        <img src={img1} height={200} width={200} />
                        <div class="container"><p class="sizefont">التوثيق 1</p></div>
                    </div>
                    </Link>
                  </li>
              </lu>

              
          </div>
          </BrowserRouter>
       );
    }
 }

export default Doc;
