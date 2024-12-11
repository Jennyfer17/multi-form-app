
export default function Button({step, isChecked}) {
    return (
        <div className="ring-white ring-1 text-white w-[2em] h-[2em] rounded-full flex items-center justify-center has-[:checked]:bg-light_blue has-[:checked]:text-marine_blue has-[:checked]:ring-pastel_blue ">
            <h3 className="font-medium">{step}</h3>
            <input type="checkbox" className="hidden" checked={isChecked} />
        </div>
    )
}