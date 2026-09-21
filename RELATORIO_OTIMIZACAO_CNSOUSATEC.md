# Relatório de auditoria e otimização — CNSOUSATEC

**Data:** 21 de setembro de 2026  
**Autor:** Manus AI  
**Repositório:** [cnsousa7/Cnsousatec1][2]  
**Branch:** `manus/site-otimizacao-2026`

## A. Resumo executivo

A auditoria identificou uma divergência entre o repositório analisado e o domínio publicado. O repositório contém uma aplicação Vite/React com publicação configurada para GitHub Pages, enquanto o domínio público entrega um build Next export diferente. Por esse motivo, as alterações deste trabalho foram feitas somente na branch de desenvolvimento do repositório e não foram publicadas nem mescladas em `main`.

As correções priorizaram confiabilidade do conteúdo, SEO técnico, acessibilidade e funcionamento em hospedagem estática. Foram removidas certificações, métricas, garantias, horários, depoimentos e promessas comerciais sem comprovação documental no projeto. Também foi removido o script analítico com placeholders de ambiente que gerava aviso de build. O formulário agora deixa de simular um envio e prepara a solicitação para o WhatsApp comercial já presente no código.

## B. Estado inicial e baseline

O commit inicial da branch foi `36a93b5ba2cc115e907bae4caafd9b698e0a1d04`, com a mensagem `feat: replace Laudos Técnicos with Manutenções Hidráulicas`. A arquitetura encontrada foi React 19, TypeScript, Vite, Tailwind CSS, Wouter e GitHub Actions. A aplicação usa `useHashLocation`, embora o domínio publicado apresente URLs convencionais e conteúdo de outro build.

O baseline técnico local foi o seguinte:

| Métrica | Antes | Depois |
| --- | ---: | ---: |
| `pnpm check` | Falhou em 7 acessos a tipos `never` | Passou |
| `pnpm test` | 1 teste passou | 1 teste passou |
| `pnpm build` | Passou | Passou |
| JavaScript principal | 480,49 kB | 461,17 kB |
| JavaScript gzip | 137,24 kB | 134,78 kB |
| CSS principal | 124,81 kB | 124,88 kB |
| HTML inicial | 368,74 kB | 369,10 kB |
| Ativos públicos | aproximadamente 11 MB | aproximadamente 11 MB |

PageSpeed Insights, Core Web Vitals de campo, Lighthouse em navegador, Google Rich Results Test e Schema.org Validator foram **NÃO VALIDADO AUTOMATICAMENTE** neste ambiente. Não foram inventadas pontuações ou métricas para essas ferramentas.

## C. Problemas encontrados

O HTML inicial estava em inglês, tinha título genérico e não declarava descrição, canonical, Open Graph ou dados estruturados. O script do Umami usava variáveis `%VITE_*%` sem configuração e gerava avisos durante o build.

O conteúdo continha referências a NR-10, CREA, ISO 9001, seguro, garantia de dois anos, mais de uma década de experiência, números de profissionais e projetos, redução de consumo, horários específicos, atendimento em todo o Brasil e depoimentos com nomes, empresas e resultados. O projeto não fornecia comprovação para essas afirmações. A página de depoimentos apresentava textos demonstrativos como avaliações reais.

A navegação não rotulava o menu móvel nem o botão do menu com estados ARIA. A imagem do logo era referenciada sem barra inicial em alguns componentes e não tinha dimensões explícitas em todas as ocorrências. O formulário dizia que a mensagem havia sido enviada embora não existisse backend configurado para a publicação estática.

## D. Alterações realizadas

Foi criado o componente `client/src/components/Seo.tsx`. Ele atualiza título, descrição, canonical absoluto, Open Graph, Twitter Card e JSON-LD `LocalBusiness` conforme a rota atual da SPA. O schema usa somente o nome, URL, telefone, áreas e serviços que aparecem no conteúdo do projeto ou na comunicação pública atual da empresa.

O arquivo `client/index.html` agora declara `lang="pt-BR"`, título local, descrição, tema e favicon. O script analítico sem configuração foi removido. Foram criados `client/public/robots.txt` e `client/public/sitemap.xml` com as seis rotas públicas existentes.

O cabeçalho recebeu navegação com rótulos em português, `aria-label`, `aria-expanded`, `aria-controls`, foco visível, caminhos absolutos para imagens e botão do WhatsApp com contraste e acessibilidade melhores. O rodapé passou a usar links Wouter funcionais e deixou de exibir redes sociais fictícias, certificações e qualificações sem comprovação.

A home passou a apresentar o foco em manutenção elétrica, hidráulica e eletrônica e recebeu uma FAQ visível com cinco perguntas. O carrossel com depoimentos não confirmados foi removido. A página de depoimentos agora informa que avaliações reais serão publicadas somente após confirmação e autorização.

A página de serviços deixou de prometer atendimento 24/7, conformidade específica, garantia de dois anos, consulta gratuita e redução de até 30%. A página Sobre foi simplificada para preservar somente informações institucionais prudentes, sem números, certificações ou história empresarial inventada.

O formulário de contato não simula mais envio. Ele abre uma mensagem codificada no WhatsApp e informa ao usuário que deve concluir o envio na nova aba. Os textos de horário, resposta em 24 horas e atendimento em todo o Brasil foram removidos. As páginas administrativas receberam tipos explícitos para o estado de autenticação estática e guards de usuário não nulo.

Foram adicionadas regras globais de foco visível e `prefers-reduced-motion`. As referências de imagem mais relevantes receberam caminhos absolutos, dimensões e `decoding` ou `loading` apropriados.

## E. Checklist de conclusão

| Item | Estado | Observação |
| --- | --- | --- |
| Auditoria do repositório e site publicado | Concluído | Divergência documentada |
| SEO e meta tags | Concluído | Implementado no HTML e componente global |
| Canonical e Open Graph | Concluído | URLs absolutas geradas por rota |
| Sitemap e robots | Concluído | Arquivos criados |
| JSON-LD | Implementado | Validação externa pendente |
| Conteúdo sem alegações inventadas | Concluído | Claims não comprovados removidos |
| FAQ visível | Concluído | Cinco perguntas na home |
| WhatsApp | Concluído | Mantido com `aria-label` e abertura segura |
| Formulário | Concluído | Fluxo transparente via WhatsApp |
| Acessibilidade | Parcialmente validado | Melhorias implementadas; Lighthouse não executado |
| Imagens | Parcialmente validado | Dimensões e carregamento revisados; conversão WebP/AVIF não executada |
| PageSpeed e Core Web Vitals | Pendente | **NÃO VALIDADO AUTOMATICAMENTE** |
| `pnpm check` | Concluído | Passou após correção dos tipos |
| `pnpm test` | Concluído | 1 teste passou |
| `pnpm build` | Concluído | Passou |
| Publicação em produção | Não realizada | Requer revisão e merge do PR |

## F. Arquivos alterados

Foram modificados `client/index.html`, `client/src/App.tsx`, `client/src/_core/hooks/useAuth.ts`, `client/src/components/DashboardLayout.tsx`, `client/src/components/Footer.tsx`, `client/src/components/Header.tsx`, `client/src/index.css`, `client/src/pages/About.tsx`, `client/src/pages/Admin.tsx`, `client/src/pages/AdminTestimonials.tsx`, `client/src/pages/Contact.tsx`, `client/src/pages/Home.tsx`, `client/src/pages/Services.tsx` e `client/src/pages/Testimonials.tsx`. Foram criados `client/src/components/Seo.tsx`, `client/public/robots.txt`, `client/public/sitemap.xml` e este relatório. Nenhum arquivo foi removido.

## G. Commits e Pull Request

 A branch de trabalho foi criada a partir do commit inicial informado acima. O commit final é `05f09cfa29d6a5e5d9da737b9b8cbdad9247214b`. A branch foi enviada ao GitHub e o [Pull Request #1][7] foi aberto contra `main`. A publicação em `main` não foi realizada automaticamente.

## H. Validação externa pendente

As validações externas recomendadas são [PageSpeed Insights][3], [Google Rich Results Test][4] e [Schema.org Validator][5]. Também é necessário verificar a execução do workflow de [GitHub Actions][6] após o Pull Request e comparar o domínio publicado com o build efetivamente gerado pelo repositório.

## Referências

[1]: https://www.cnsousatec.com.br/ "CNSOUSATEC — domínio atualmente publicado"
[2]: https://github.com/cnsousa7/Cnsousatec1 "Repositório principal da CNSOUSATEC"
[3]: https://pagespeed.web.dev/ "PageSpeed Insights"
[4]: https://search.google.com/test/rich-results "Google Rich Results Test"
[5]: https://validator.schema.org/ "Schema.org Validator"
[6]: https://github.com/cnsousa7/Cnsousatec1/actions "GitHub Actions do repositório"
[7]: https://github.com/cnsousa7/Cnsousatec1/pull/1 "Pull Request #1 — auditoria e otimização do site"
