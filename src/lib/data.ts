import type { LucideIcon } from "lucide-react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  Bike,
  Clapperboard,
  FileBarChart,
  Home,
  PiggyBank,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Возможности", href: "#features" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SOCIAL_PROOF_LOGOS = [
  "Northwind Studio",
  "Arka Analytics",
  "Vantree",
  "Solace Robotics",
  "Loop & Co",
  "Meridian Labs",
  "Fernwood",
  "Kobo Systems",
] as const;

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: PiggyBank,
    title: "Умный бюджет",
    description:
      "Finly сам распределяет доходы по категориям и подсказывает, где вы рискуете выйти за рамки — до того, как это случится.",
  },
  {
    icon: Receipt,
    title: "Учёт расходов",
    description:
      "Каждая операция попадает в нужную категорию автоматически. Никаких таблиц и ручного ввода в конце месяца.",
  },
  {
    icon: Sparkles,
    title: "Финансовая аналитика",
    description:
      "Понятные графики показывают, куда уходят деньги и как меняются привычки от месяца к месяцу.",
  },
  {
    icon: FileBarChart,
    title: "Ежемесячные отчёты",
    description:
      "В начале каждого месяца — короткая сводка: что изменилось, где сэкономили и на что стоит обратить внимание.",
  },
  {
    icon: Target,
    title: "Цели накоплений",
    description:
      "Поставьте цель — отпуск, подушка безопасности, крупная покупка — и следите за прогрессом в реальном времени.",
  },
  {
    icon: ShieldCheck,
    title: "Защита данных",
    description:
      "Шифрование на уровне банков, без доступа третьих лиц к вашим средствам. Только просмотр операций — и ничего больше.",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Подключите счета",
    description:
      "Безопасно свяжите карты и счета в банках — Finly подтянет историю операций и начнёт анализ сразу же.",
  },
  {
    number: "02",
    title: "Понимайте свои траты",
    description:
      "Операции автоматически распределяются по категориям, а понятные графики показывают реальную картину расходов.",
  },
  {
    number: "03",
    title: "Достигайте целей",
    description:
      "Ставьте финансовые цели и следите за прогрессом — Finly подскажет, как быстрее к ним прийти.",
  },
];

export type BillingPeriod = "monthly" | "yearly";

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  cta: string;
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Чтобы попробовать и понять свои базовые привычки трат.",
    priceMonthly: 0,
    priceYearly: 0,
    cta: "Начать бесплатно",
    features: [
      "1 подключённый счёт",
      "Базовые категории расходов",
      "Месячная сводка",
      "История операций за 3 месяца",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Для тех, кто хочет держать бюджет под контролем каждый день.",
    priceMonthly: 349,
    priceYearly: 279,
    popular: true,
    cta: "Оформить Pro",
    features: [
      "До 5 подключённых счетов",
      "Умные категории и автоправила",
      "Цели накоплений без ограничений",
      "Еженедельные и месячные отчёты",
      "Полная история операций",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Максимум аналитики для семьи и сложных финансов.",
    priceMonthly: 690,
    priceYearly: 549,
    cta: "Оформить Premium",
    features: [
      "Неограниченное число счетов",
      "Общий бюджет для семьи",
      "Прогноз баланса на 3 месяца вперёд",
      "Приоритетная поддержка",
      "Экспорт данных в любой формат",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Марина Соколова",
    role: "Дизайнер, Санкт-Петербург",
    quote:
      "Первый раз в жизни я точно знаю, сколько трачу на такси и доставку еды. Finly показал это без единой таблицы — просто открыла приложение.",
    initials: "МС",
  },
  {
    name: "Игорь Ковалёв",
    role: "Предприниматель, Москва",
    quote:
      "Подключил личные и семейные карты — теперь весь бюджет виден в одном месте. Цель на подушку безопасности закрыли на два месяца раньше плана.",
    initials: "ИК",
  },
  {
    name: "Алина Дорошенко",
    role: "Маркетолог, Казань",
    quote:
      "Отчёты в начале месяца — это ровно то, чего мне не хватало. Пять минут чтения — и понятно, что менять в привычках.",
    initials: "АД",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Как Finly подключается к моим счетам?",
    answer:
      "Finly использует защищённое соединение с банком только для чтения операций — уровень шифрования соответствует банковским стандартам. Совершать переводы или платежи от вашего имени приложение не может.",
  },
  {
    question: "Безопасно ли хранить данные о финансах в Finly?",
    answer:
      "Да. Все данные шифруются при передаче и хранении, доступ к аккаунту защищён двухфакторной аутентификацией, а сотрудники Finly не видят номера карт и пароли от банков.",
  },
  {
    question: "Можно ли пользоваться Finly бесплатно?",
    answer:
      "Да, тариф Free доступен без ограничения по времени: один счёт, базовые категории и месячная сводка. Для расширенной аналитики и нескольких счетов подойдут Pro или Premium.",
  },
  {
    question: "Что будет, если я отменю подписку?",
    answer:
      "Вы сохраните доступ до конца оплаченного периода, после чего аккаунт автоматически перейдёт на тариф Free — история операций и цели никуда не исчезнут.",
  },
  {
    question: "Finly работает с банками СНГ?",
    answer:
      "Да, поддерживаются крупнейшие банки России и СНГ. Список постоянно расширяется — если вашего банка ещё нет в списке, напишите нам, и мы подключим его в приоритетном порядке.",
  },
  {
    question: "Можно ли вести общий бюджет с семьёй?",
    answer:
      "На тарифе Premium доступен общий бюджет: вы видите операции друг друга по выбранным счетам, ставите совместные цели и получаете единый отчёт на семью.",
  },
  {
    question: "Есть ли приложение для телефона?",
    answer:
      "Finly доступен как веб-приложение и адаптирован под мобильные браузеры. Нативные приложения для iOS и Android уже в разработке.",
  },
];

export type Transaction = {
  id: string;
  merchant: string;
  category: string;
  categoryKey: CategoryKey;
  date: string;
  amount: number;
  icon: LucideIcon;
};

export type CategoryKey =
  | "food"
  | "transport"
  | "shopping"
  | "subscriptions"
  | "home"
  | "health"
  | "income";

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  food: "Еда",
  transport: "Транспорт",
  shopping: "Покупки",
  subscriptions: "Подписки",
  home: "Дом",
  health: "Здоровье",
  income: "Доход",
};

export const TRANSACTIONS: Transaction[] = [
  {
    id: "t1",
    merchant: "Смузи-бар «Утро»",
    category: "Еда",
    categoryKey: "food",
    date: "Сегодня, 09:14",
    amount: -420,
    icon: UtensilsCrossed,
  },
  {
    id: "t2",
    merchant: "Зарплата, ООО «Меридиан»",
    category: "Доход",
    categoryKey: "income",
    date: "Вчера, 10:00",
    amount: 128000,
    icon: Banknote,
  },
  {
    id: "t3",
    merchant: "Магазин «Полка»",
    category: "Покупки",
    categoryKey: "shopping",
    date: "Вчера, 18:42",
    amount: -3260,
    icon: ShoppingBag,
  },
  {
    id: "t4",
    merchant: "Подписка Cinemax",
    category: "Подписки",
    categoryKey: "subscriptions",
    date: "12 августа, 07:03",
    amount: -499,
    icon: Clapperboard,
  },
  {
    id: "t5",
    merchant: "Коммунальные платежи",
    category: "Дом",
    categoryKey: "home",
    date: "10 августа, 12:30",
    amount: -5100,
    icon: Home,
  },
  {
    id: "t6",
    merchant: "Wi-Fi, домашний интернет",
    category: "Подписки",
    categoryKey: "subscriptions",
    date: "9 августа, 09:00",
    amount: -650,
    icon: Wifi,
  },
  {
    id: "t7",
    merchant: "Велопрокат",
    category: "Транспорт",
    categoryKey: "transport",
    date: "7 августа, 19:20",
    amount: -240,
    icon: Bike,
  },
];

export type CategoryBreakdown = {
  key: CategoryKey;
  label: string;
  amount: number;
  percent: number;
};

export const CATEGORY_BREAKDOWN: CategoryBreakdown[] = [
  { key: "food", label: "Еда", amount: 18400, percent: 34 },
  { key: "home", label: "Дом", amount: 15100, percent: 28 },
  { key: "shopping", label: "Покупки", amount: 10800, percent: 20 },
  { key: "subscriptions", label: "Подписки", amount: 5600, percent: 10 },
  { key: "transport", label: "Транспорт", amount: 4300, percent: 8 },
];

export const CATEGORY_FILTERS: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "food", label: "Еда" },
  { key: "shopping", label: "Покупки" },
  { key: "subscriptions", label: "Подписки" },
  { key: "transport", label: "Транспорт" },
  { key: "health", label: "Здоровье" },
  { key: "income", label: "Доход" },
];

export const SPENDING_SERIES = [
  { label: "Фев", value: 58200 },
  { label: "Мар", value: 61400 },
  { label: "Апр", value: 54900 },
  { label: "Май", value: 67300 },
  { label: "Июн", value: 60100 },
  { label: "Июл", value: 71800 },
  { label: "Авг", value: 54200 },
];

export const DASHBOARD_SUMMARY = {
  balance: 214300,
  income: 128000,
  expenses: 54200,
  balanceChangePercent: 12.4,
  incomeChangePercent: 4.1,
  expensesChangePercent: -8.6,
};

export { ArrowDownRight, ArrowUpRight };
