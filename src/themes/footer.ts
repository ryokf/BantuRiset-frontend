import { CustomFlowbiteTheme } from "flowbite-react";

const footerTheme: CustomFlowbiteTheme["footer"] = {
    root: {
        "base": "w-full rounded-lg shadow dark:bg-gray-800 md:flex md:items-center md:justify-between bg-black text-white",
        "container": "w-full p-6",
    },
    groupLink: {
        "base": "flex flex-wrap text-sm text-white",
        "link": {
            "base": "me-4 last:mr-0 md:mr-6 ",
            "href": "hover:underline"
        },
        "col": "flex-col space-y-4"
    },
    icon: {
        "base": "text-gray-900 dark:hover:text-white",
        "size": "h-10 w-5"
    },
    "title": {
        "base": "mb-6 text-sm font-semibold uppercase text-white"
    },
    "divider": {
        "base": "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
    },
    "copyright": {
        "base": "text-sm text-gray-400 sm:text-center text-white",
        "href": "ml-1 hover:underline",
        "span": "ml-1"
    },
    brand: {
        "base": "mb-4 flex items-center sm:mb-0 text-white",
        "img": "mr-3 h-8",
        "span": "self-center whitespace-nowrap text-2xl font-semibold text-white"
    }
}

export default footerTheme