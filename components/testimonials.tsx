const testimonials = [
  {
    name: "Мария Петрова",
    role: "Собственик на е-магазин",
    avatar: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    testimonial:
      "SinceSeven направиха невероятен уебсайт за моя онлайн магазин. Продажбите се увеличиха с 40% само за 3 месеца!",
  },
  {
    name: "Георги Димитров",
    role: "Мениджър в строителна фирма",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    testimonial:
      "Благодарение на тяхната SEO оптимизация, нашата фирма се появява на първо място в Google за всички важни търсения в региона. Имаме повече клиенти от всякога.",
  },
  {
    name: "Елена Стоянова",
    role: "Собственик на ресторант",
    avatar: "https://mockmind-api.uifaces.co/content/human/113.jpg",
    testimonial:
      "Google Maps оптимизацията, която направиха, доведе до значително увеличение на резервациите. Професионални и отзивчиви.",
  },
  {
    name: "Иван Николов",
    role: "Фризьор",
    avatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    testimonial: "Бърз, качествен и надежден сервис. Препоръчвам!",
  },
  {
    name: "Десислава Йорданова",
    role: "Счетоводител",
    avatar: "https://mockmind-api.uifaces.co/content/human/116.jpg",
    testimonial: "Отлично обслужване и страхотни резултати!",
  },
  {
    name: "Стефан Василев",
    role: "Стартъп основател",
    avatar: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    testimonial:
      "SinceSeven направиха невероятен уебсайт за нашия стартъп. Професионализмът им и вниманието към детайлите са впечатляващи.",
  },
];

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="mx-auto max-w-(--breakpoint-xl) px-6 py-12 sm:py-24"
    >
      <h2 className="text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Обичани от нашите клиенти
      </h2>
      <p className="text-muted-foreground mt-2 text-center text-lg tracking-normal text-balance sm:mt-4 sm:text-2xl">
        Отзивите за нас
      </p>

      <div className="mx-auto mt-16 max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3">
        {testimonials.map(({ name, avatar, role, testimonial }, index) => (
          <div
            key={index}
            className="bg-muted mb-6 break-inside-avoid rounded-lg border p-1.5"
          >
            <div className="from-muted/50 to-background via-background dark:bg-background dark:border-muted-foreground/30 relative flex flex-col rounded-md border bg-gradient-to-bl px-5 pt-10 pb-3">
              {/* Quote */}
              <span className="text-muted-foreground absolute top-5 left-3 font-mono text-7xl">
                &#8220;
              </span>

              <p className="grow py-6 text-lg font-medium">{testimonial}</p>
              <div className="mt-2 flex items-center gap-3 py-3.5 sm:mt-4">
                <img
                  src={avatar}
                  alt=""
                  className="ring-border ring-offset-background h-12 w-12 rounded-full ring-2 ring-offset-[2px]"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm">{role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
