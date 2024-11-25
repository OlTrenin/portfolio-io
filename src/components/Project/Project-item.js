import { NavLink } from "react-router-dom";

import "./project-item.css"

export default function Project({title,img,index} ) { 
   return (
    <NavLink to = {`/project/${index}`}>
      <li className="project">
            <img
              src={img}
              alt={title}
              className="project__img"
              index = {index}
            />
            <h3 className="project__title">{title}</h3>
        </li>
    </NavLink>
);
};