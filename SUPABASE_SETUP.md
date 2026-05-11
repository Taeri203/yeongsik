# Supabase and Email Setup

## 1. Create the Supabase table

Run this SQL in Supabase SQL Editor.

```sql
create table if not exists public.voice_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  residence text not null,
  age text not null,
  category text not null,
  location text,
  title text not null,
  content text not null,
  reply_requested boolean not null default true,
  status text not null default 'new'
);

alter table public.voice_submissions enable row level security;

create policy "No public reads for voice submissions"
on public.voice_submissions
for select
to anon
using (false);

create policy "No public writes for voice submissions"
on public.voice_submissions
for insert
to anon
with check (false);
```

The website uses the server-only `SUPABASE_SERVICE_ROLE_KEY`, so visitors cannot read or write this table directly.

## 2. Add Vercel environment variables

Add these in Vercel Project Settings > Environment Variables.

```bash
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
RESEND_API_KEY=re_your_resend_api_key
VOICE_NOTIFICATION_TO=ceo@insuai.kr
VOICE_NOTIFICATION_FROM=우영식.kr <noreply@your-domain.com>
```

For first testing, Resend allows `onboarding@resend.dev` as the sender. For production, verify your domain in Resend and use a sender like `noreply@우영식.kr` or `noreply@insuai.kr`.

## 3. Where submissions appear

Submissions are saved in Supabase > Table Editor > `voice_submissions`.

New submissions are also sent to the email address in `VOICE_NOTIFICATION_TO`.
