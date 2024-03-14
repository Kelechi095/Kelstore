import { AiFillPhone, AiOutlineDesktop, AiOutlineLaptop } from "react-icons/ai"
import { MdOutlineKeyboard, MdStorefront, MdTv } from "react-icons/md"
import { PiDressFill } from "react-icons/pi";
import { GiRunningShoe, GiTrousers } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { TbFridge } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import { GiPowerGenerator } from "react-icons/gi";
import { MdOutlineVideogameAsset } from "react-icons/md";




export const categories = [
    {
        label: 'All',
        icon: MdStorefront,
    },
    {
        label: 'Phone',
        icon: AiFillPhone,
    },
    {
        label: 'Laptop',
        icon: AiOutlineLaptop,
    },
    {
        label: 'Tv',
        icon: MdTv,
    },
    {
        label: 'Fridge',
        icon: TbFridge,
    },
    {
        label: 'AC',
        icon: TbAirConditioning,
    },
    {
        label: 'Game',
        icon: MdOutlineVideogameAsset
    },
]