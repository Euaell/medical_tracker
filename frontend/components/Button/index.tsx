'use client'
export default function Button({content, setActive, activePage} : { content: any, setActive: any,activePage: any } ) {
    function temp(e: MouseEvent) {
        e.stopPropagation()
    }
    return (<div className={`border   m-1 rounded-md overflow-hidden ${activePage == content ? 'bg-cyan-500':'bg-white'}`} >
            <button className="px-2 py-1 hover:bg-gray-400 " onClick={(e)=>{

                console.log("I have clicked !!")
                setActive(content)}}>
                {content}</button>
    </div>)
}