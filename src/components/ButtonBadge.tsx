
const ButtonBadge = ({ title, isTrue = true }: { title: string, isTrue?: boolean }) => {
    return (
        <button className={`${isTrue ? "border-primary bg-transparent text-primary" : "bg-[#d9d9d9] border-none text-white"} border  text-xs px-3 py-1 rounded-full`}>
            {title}
        </button>
    )
}

export default ButtonBadge