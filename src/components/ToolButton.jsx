export default function ToolButton({ icon = "user", isActive, variation = 'default', rounded = 'md', ...rest }) {
    const variationList = {
        default: 'bg-wild-sand-700 hover:bg-wild-sand-600 active:bg-wild-sand-800',
        magic: 'bg-pastel-pink-600 hover:bg-pastel-pink-500 active:bg-pastel-pink-700'
    }

    const roundedList = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
        none: 'rounded-none'
    }

    return (
        <button data-active={isActive} {...rest} className={`text-xl text-wild-sand-50 h-10 w-10 flex justify-center items-center ${roundedList[rounded]} ${variationList[variation]} data-[active="true"]:bg-cyan-700 outline-none focus:border-2 transition-[border] border-pastel-pink-400 duration-150`}>
            <i className={`ti ti-${icon} `}></i>
        </button>
    )
}