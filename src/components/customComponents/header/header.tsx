import DropDownProducts from "../dropDown/DropDownProducts"


function Header() {
    return (
        <div className='w-full bg-primary-color p-5'>
            <div className='w-[90%] mx-auto flex justify-between gap-5'>
                <a className='' href="/">
                    <h1 className='text-[2rem] font-bold text-green-color'>Boxinator</h1>
                </a>
                <div className="flex gap-7">

                    <a>
                        <DropDownProducts />
                    </a>

                    <a href="/signin">
                        <img src="./icons/loginicon.svg" alt="Login" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Header