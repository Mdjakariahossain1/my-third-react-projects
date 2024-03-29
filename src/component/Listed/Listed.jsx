import React, { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';

const Listed = () => {

    const books =useLoaderData()

    const {id}=useParams()
    const intejar = parseInt(id)
    const book =books.find(book =>book.bookId===intejar)
console.log(book)


    return (
        <div>
        <div className="card lg:card-side bg-base-100 w-[993px] mr-[100px] mt-8 shadow-xl">
<figure><img className='w-[300px]' src={book.image} alt="Album"/></figure>
<div className="card-body">
<h2 className="card-title text-4xl">{book.bookName}</h2>
<hr />
<p>{book.author}</p>
<hr />
<p>{book.category}</p>
<p>{book.review}</p>
<p> tag {book.tags}</p>
<div>
 <p>Number of Pages:{book.totalPages}</p>
 <p>Publisher:{book.publisher}</p>
 <p>Year of Publishing:{book.yearOfPublishing}</p>
 <p>Rating:{book.rating}</p>
 <div className='flex gap-4'>
    <button className='btn'>Read</button>
    <button className='btn'>Wishlist</button>
 </div>
</div>
</div>
</div>
    </div>
    );
};

export default Listed;