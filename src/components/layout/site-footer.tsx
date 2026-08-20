import Link from "next/link";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/finly/social-icons";

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "#features" },
      { label: "Как работает", href: "#how-it-works" },
      { label: "Тарифы", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Блог", href: "#" },
      { label: "Карьера", href: "#" },
      { label: "Контакты", href: "#" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { label: "Центр помощи", href: "#" },
      { label: "Документация API", href: "#" },
      { label: "Статус системы", href: "#" },
      { label: "Сообщество", href: "#" },
    ],
  },
  {
    title: "Правовая информация",
    links: [
      { label: "Условия использования", href: "#" },
      { label: "Конфиденциальность", href: "#" },
      { label: "Обработка данных", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "GitHub", href: "#", icon: GithubIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper-alt/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-forest text-primary-foreground">
                <span className="font-heading text-sm font-semibold">F</span>
              </span>
              <span className="font-heading text-xl font-semibold text-ink">Finly</span>
            </Link>
            <p className="max-w-[22ch] text-sm leading-relaxed text-muted-foreground">
              Личные финансы, которые наконец складываются в понятную картину.
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-forest"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Finly. Демонстрационный проект для портфолио.</p>
          <p className="font-tabular">Сделано с заботой о вашем бюджете</p>
        </div>
      </div>
    </footer>
  );
}
