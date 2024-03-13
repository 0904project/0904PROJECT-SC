

// eslint-disable-next-line react/prop-types
export default function Notification({ open, onClose, children, title }){
    return(
        <div>
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-[20000] ${open ? 'block' : 'hidden'}`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-50`}></div>
                <div className={`bg-white w-11/12 md:max-w-md mx-auto rounded-3xl shadow-lg z-50 overflow-y-auto`}>
                    <div className={`flex justify-between items-center p-4 border-b`}>
                        <p className={`text-2xl text-gray-600 font-bold italic`}>{title}</p>
                        <button onClick={onClose} className={`text-4xl md:text-5xl text-gray-800 active:text-gray-400`}>×</button>
                    </div>
                        {children}
                    <div className={'flex items-center justify-center'}>
                        <button onClick={onClose} className={'p-2 mb-10 bg-green-600 w-36 rounded-md text-white cursor-pointer text-xl hover:bg-green-700 '}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}