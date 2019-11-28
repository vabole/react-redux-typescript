[![Netlify Status](https://api.netlify.com/api/v1/badges/1a2e405b-7eca-4330-8f12-3708a363b327/deploy-status)](https://app.netlify.com/sites/vigilant-pare-6101d0/deploys)

[Live Demo](https://vigilant-pare-6101d0.netlify.com/)

[Тестовое задание для aviasales](https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend)

## Краткое описание

1. Настроен CI/CD Pipeline
   - при коммитах и пул-реквестах автоматически запускаются тесты
   - если тесты успешно проходят -  автоматический деплой на Netlify (если ветка - мастер то на прод, если нет то на стейдж)
   - автоматический аудит сборки в lighthouse

2. Оптимизирована производительность приложения
   - 100 баллов за производительность в Lighthouse [пример результатов Lighthouse](https://93-223224691-gh.circle-artifacts.com/0/reports/anonymous-97e172523688cd42965463814fc337a3.report.html)
   - Пререндеринг позволяет показать FCP (First Contentful Paint) менее чем через секунду после запуска приложения

3. Оптимизирована доступность приложения
    - Доступна навигация с клавиатуры
    - Испльзуется семантическая разметка - важно как для скринридеров так и для SEO
