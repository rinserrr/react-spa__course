function Popularity({ count }) {
  // Если комментариев больше пяти, то зелёным цветом нужно выводить надпись «Проверенный товар».
  // Если комментариев нет, то нужно выводить жирным шрифтом надпись «Будь первым. Поделись впечатлениями».
  // В остальных случаях ничего выводить не нужно.

  let result = null;

  if (count === 0) {
    result = <p>Будь первым. Поделись впечатлениями</p>;
  }

  if (count > 5) {
    result = <p style={{ color: "green" }}>Проверенный товар</p>;
  }
  return result;
}


export default Popularity;