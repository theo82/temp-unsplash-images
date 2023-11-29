import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if(!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);
  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form action="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" className='form-input' placeholder='cat'/>
        <button type="submit" className='btn'>search</button>
      </form>
    </section>
  )
}

export default SearchForm