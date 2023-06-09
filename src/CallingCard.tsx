import React from 'react'

function CallingCard() {
    return (
        <div className="fixed right-0 bottom-0 py-1.5 px-3 text-xs font-bold bg-white hover:bg-gray-200 shadow rounded-tl-lg ">
            <div className="flex items-center">

                <a href="https://twitter.com/zachbellay" target="_blank" rel="noreferrer noopener">
                    <div className="flex-grow text-gray-700">
                        by @zachbellay
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CallingCard

