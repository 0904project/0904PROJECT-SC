// eslint-disable-next-line react/prop-types
export default function ListProfile({className,buka}) {
    return (
            <div className={`flex  flex-col shadow-md text-sm ${className} ${buka ? 'block' : 'hidden'}`}>
                <ul className={'flex flex-col gap-2'}>
                    <li className={'group'}><a href="" className={'transition duration-500 ease-in-out group-hover:border-b-2 group-hover:border-black'}>Profile</a></li>
                    <li className={'group'}><a href="" className={'transition duration-500 ease-in-out group-hover:border-b-2 group-hover:border-black'}>Setting</a></li>
                    <li className={'group'}><a href="" className={'transition duration-500 ease-in-out group-hover:border-b-2 group-hover:border-black'}>Logout</a></li>
                </ul>
            </div>
    )
}