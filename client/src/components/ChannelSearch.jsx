import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react'

import { SearchIcon } from '../assets'

export default function ChannelSearch({ setToggleContainer }) {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const onSearch = (e) => {
        e.preventDefault();

        setLoading(true)
        setQuery(e.target.value)
        // getChannels(e.target.value)
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-serach__input__icon">
                    <SearchIcon />
                </div>
                <input 
                    className="channel-search__input__text" 
                    placeholder="Search" 
                    type="text" 
                    value={query}  
                    onChange={onSearch}
                />
            </div>
            {/* { query && (
                <ResultsDropdown 
                    teamChannels={teamChannels}
                    directChannels={directChannels}
                    loading={loading}
                    setChannel={setChannel}
                    setQuery={setQuery}
                    setToggleContainer={setToggleContainer}
                />
            )} */}
        </div>
    )
}
