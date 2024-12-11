import thanks_icon from "../assets/icon-thank-you.svg"

export default function Thanks() {
    return (
        <div className="flex items-center flex-col justify-center h-[25em]">
            <img src={thanks_icon} alt="thank you icon" />
            <h2 className="m-2 text-2xl text-marine_blue font-bold">Thank you!</h2>
            <p className="text-cool_gray">
                Thanks for confirming your subscription!
            </p>
            <p className="text-center text-cool_gray">We hope you have fun using our platform. If you ever need suport, please feel free to email us at support@loremgaming.com.

            </p>
        </div>
    )
}