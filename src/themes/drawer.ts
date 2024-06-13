import { CustomFlowbiteTheme } from "flowbite-react";

const drawerTheme: CustomFlowbiteTheme["drawer"] = {
    root: {
        base: "fixed z-40 overflow-y-auto bg-transparent border border-4 border-white transition-transform dark:bg-gray-800 rounded-xl mx-4",
        backdrop: "fixed inset-0 z-30",
        edge: "bottom-16",
        position: {
            top: {
                on: "left-0 right-0 top-0 w-full transform-none",
                off: "left-0 right-0 top-0 w-full -translate-y-full",
            },
            right: {
                on: "right-0 top-0 h-screen w-80 transform-none",
                off: "right-0 top-0 h-screen w-80 translate-x-full -mx-10",
            },
            bottom: {
                on: "bottom-0 left-0 right-0 w-full transform-none",
                off: "bottom-0 left-0 right-0 w-full translate-y-full",
            },
            left: {
                on: "left-0 top-0 h-screen w-80 transform-none",
                off: "left-0 top-0 h-screen w-80 -translate-x-full",
            },
        },
    },
    header: {
        inner: {
            closeButton:
                "hidden end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
            closeIcon: "h-4 w-4",
            titleIcon: "me-2.5 h-4 w-4",
            titleText:
                "hidden mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400",
        },
        collapsed: {
            on: "hidden ",
            off: "block",
        },
    },
    items: {
        base: "",
    },
};

export default drawerTheme;
