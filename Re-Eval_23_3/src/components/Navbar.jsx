import { NavLink } from "react-router-dom";

const links = [
  //   add the other link as well
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  }
  
];
export const Navbar = () => {
  return <> {
    //map through the link ad display it in header
    links.map((e)=>{
     return <NavLink to={e.link}>{e.title}</NavLink>
    })
  }
  </>
};
