import React from 'react'
import './Search.css'

function Search() {
  return (
    <div>
      <form action="" class="search-bar">
	<input type="search" name="search" pattern=".*\S.*" required/>
	<button class="search-btn" type="submit">
		<span>Search</span>
	</button>
</form>
    </div>
  )
}

export default Search
