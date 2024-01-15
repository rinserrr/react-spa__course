function Comments({ comments }) {
  return (
    <div>
      <h2>Комментарии</h2>
      {/* Отобразить комментарии к товару. */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.author}</b>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Comments;
