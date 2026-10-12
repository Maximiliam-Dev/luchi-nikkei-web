# Luchi Nikkei

Sitio web one-page de **Luchi Nikkei** (Burger · Sushi) en Iquique, Chile. Carta desde Supabase, pedidos por WhatsApp, listo para Vercel.

## Cómo levantarlo

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # ESLint
```

## Cambiar el número de WhatsApp

Edita `src/data/site.ts`:

- `whatsapp`: número en formato internacional sin `+` ni espacios (ejemplo: `56954248389`)
- `phoneTel`: con `+` para el enlace `tel:` (ejemplo: `+56954248389`)
- `phoneDisplay`: cómo se muestra en pantalla

Los enlaces de WhatsApp se arman en `src/lib/whatsapp.ts`.

## Editar el menú

El menú se lee de la tabla pública `menu` en Supabase (`id`, `created_at`, `nombre`, `descripcion`, `precio`). Configura las claves en `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

La carta se refresca cada 60 segundos. En Supabase, el rol `anon` necesita una política de lectura (`SELECT`) sobre `menu`.

El logo se referencia en `public/logo.png`. Si un producto no tiene foto, `ProductImage` muestra un fondo coral con emoji.

## Desplegar en Vercel

1. Sube el repo a GitHub (o importa la carpeta desde Vercel).
2. En [vercel.com](https://vercel.com) → Add New → Project.
3. Framework: Next.js. Build: `next build`. Output: default.
4. Variables: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Deploy.

## Identidad

- Negro `#0A0A0A` · Fucsia `#FF1FA8` · Lima `#B6FF1A` · Amarillo `#FFE61F`
- Tipografías: Fraunces (títulos) y Plus Jakarta Sans (cuerpo)
- Local: Juan Martínez 1946, Iquique. WhatsApp +56 9 5424 8389.
