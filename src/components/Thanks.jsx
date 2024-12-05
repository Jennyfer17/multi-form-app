import thanks_icon from "../assets/icon-thank-you.svg"

export default function Thanks() {
    return (
        <div>
            <img src={thanks_icon} alt="thank you icon" />
            <h2>Thank you!</h2>
            <p>
                Thanks for confirming your subscription!
            </p>
            <p>We hope you have fun using our platform. If you ever need suport, please feel free to email us at support@loremgaming.com.

            </p>
        </div>
    )
}