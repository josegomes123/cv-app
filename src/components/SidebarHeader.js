import React from 'react'

function SidebarHeader(props) {
    const title = props.title;
    return (
        <div>
            <p className="mt-5 mx-3 px-2 py-1 mb-4 text-3xl font-semibold text-center bg-gray-100 border-2 border-gray-300 border-r-2 rounded-md">
				{title}
			</p>
        </div>
    )
}

export default SidebarHeader
