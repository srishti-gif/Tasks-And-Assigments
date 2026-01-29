function loadAllhtml(data) {
  return data
    .map(
      (book) => `
    <div style="
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      padding: 12px;
      margin: 10px;
      border-radius: 8px;"> 
      <p>id: ${book.id}</p>
      <p>title: ${book.book_name || book.title}</p>
      <p>author: ${book.author}</p>
      <p>category: ${book.category || book.genre}</p>
      <p>publish_date: ${book.publish_date || book.year_published}</p>
    </div>
  `,
    )
    .join("");
}

function loadhtmlById(book) {
  return `
    <div style="
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      padding: 12px;
      margin: 10px;
      border-radius: 8px;"> 
      <p>id: ${book.id}</p>
      <p>title: ${book.book_name || book.title}</p>
      <p>author: ${book.author}</p>
      <p>category: ${book.category || book.genre}</p>
      <p>publish_date: ${book.publish_date || book.year_published}</p>
    </div>
  `;
}

module.exports = { loadAllhtml, loadhtmlById };
