

const Footer = () => {

    return (
        <div className="">
            <span> Not member? </span>
            <span className="text-blue-600 cursor-pointer" onClick={() => alert("Redirect to signup page")}> Create account </span>
        </div>
    )
}

export default Footer;

