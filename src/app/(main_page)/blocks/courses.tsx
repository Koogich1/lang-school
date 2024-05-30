import Card from "./elements/card";

const Courses = () => {
  return (
    <div className="flex justify-end w-[100%] mt-[15%] flex-col">
      <h1 className="text-4xl text-right font-bold">
        Онлайн-курсы и индивидуальные уроки языков <br />с профессиональными
        педагогами
      </h1>
      <div className="flex justify-center gap-5 items-end mt-[100px]">
        <Card
          courseName="Спринт"
          courseLable="2-месячное испытание с большим вознаграждением – для учащихся, которым нужна дополнительная мотивация."
          li1="Зарабатывайте 50% кэшбэка или больше на зачетных единицах"
          li2="Групповые занятия с 3-5 учениками"
          li3="30 или 60 занятий за 2 месяца"
          gradient={false}
        />
        <Card
          courseName="Гибкий"
          courseLable="Создайте свое собственное языковое путешествие – для учащихся, которым нужна большая гибкость."
          li1="Сам выбирай время урока"
          li2="Изменяй или отменяй интенсивность каждые 4 недели"
          li3="Приватные занятия 1 на 1"
          gradient={true}
        />
        <Card
          courseName="Команды"
          courseLable="Заранее забронированные занятия с выделенной командой - для учащихся, которым нужна структура и поддержка."
          li1="Меняющиеся одноклассники и учителя"
          li2="2 интенсивных курса: 4 или 6 занятий в неделю"
          li3="48 групповых занятий за 8 или 12 недель"
          gradient={false}
        />
      </div>
    </div>
  );
};
export default Courses;