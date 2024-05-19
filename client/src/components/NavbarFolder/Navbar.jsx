"use client"
import React from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
 
function NavList() {
  return (
    <ul className="my-2 flex justify-evenly flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/" className="flex items-center hover:text-[#2a6f97] transition-colors text-white text-base">
          Home
        </Link>
      </Typography>
      <Menu allowHover>
        <MenuHandler>
          <Typography
            as="li"
            variant="medium"
            color="white" 
            className="p-1 font-medium cursor-pointer"
          >
           News-Events
          </Typography>
        </MenuHandler>
        <MenuList className="p-1">
        <MenuItem>
            <Link href="newsletter" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Dept. NewsLetter
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="News-Events" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
             News-Events
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="Notice" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Notice
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="mission" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Mission & Vision
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="about" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
               About 
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu allowHover>
        <MenuHandler>
          <Typography
            as="li"
            variant="medium"
            color="white" 
            className="p-1 font-medium cursor-pointer"
          >
            Faculty
          </Typography>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem>
            <Link href="facultyDesc" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              FacultyDesc
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="technical-staff" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              TechnicalStaff
            </Link>
          </MenuItem>
    
        </MenuList>
      </Menu>
     
      <Menu allowHover>
        <MenuHandler>
          <Typography
            as="li"
            variant="medium"
            color="white" 
            className="p-1 font-medium cursor-pointer"
          >
              Student
          </Typography>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem>
            <Link href="students" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Student
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="alumnis" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Alumni
            </Link>
          </MenuItem>
    
        </MenuList>
      </Menu>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="contactus" className="flex items-center hover:text-[#2a6f97] transition-colors text-white text-base">
          Contact Us 
        </Link>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="bg-blue-gray-900">
      <div className="flex items-center justify-around">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
